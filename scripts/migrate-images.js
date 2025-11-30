#!/usr/bin/env node

/**
 * WordPress Image Migration Script
 * 
 * This script:
 * 1. Scans all TypeScript/TSX files for WordPress image URLs
 * 2. Downloads images and organizes them by content type
 * 3. Generates a mapping of old URLs to new local paths
 * 4. Replaces all WordPress URLs in code files with local paths
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const BASE_DIR = path.join(__dirname, '..');
const PUBLIC_IMAGES_DIR = path.join(BASE_DIR, 'public', 'images');
const MAPPING_FILE = path.join(BASE_DIR, 'scripts', 'image-mapping.json');

// Image category mappings based on filename patterns and context
const categorizeImage = (url, context = '') => {
  const filename = path.basename(url).toLowerCase();
  const urlPath = url.toLowerCase();

  // Logos
  if (filename.includes('braxton') && (filename.includes('logo') || filename.includes('white-gold') || filename.includes('.png'))) {
    return 'logo';
  }

  // Hero images
  if (urlPath.includes('hero') || filename.includes('slider') || filename.includes('dji-0005') || filename.includes('home-')) {
    return 'hero';
  }

  // Background images
  if (urlPath.includes('background') || filename.includes('bkgd') || filename.includes('blur') || filename.includes('bottom-of-home-page') || filename.includes('contact-page')) {
    return 'backgrounds';
  }

  // Section headers/dividers
  if (urlPath.includes('section-header') || urlPath.includes('header-image') || filename.includes('mancave-1950x650')) {
    return 'section-headers';
  }

  // Design details images
  if (urlPath.includes('design') || filename.includes('bathroom') || filename.includes('pool') || 
      filename.includes('architecture') || filename.includes('kitchen') || filename.includes('indoor') || 
      filename.includes('outdoor') || filename.includes('mancave') || filename.includes('backyard') ||
      filename.includes('leftview') || filename.includes('square') || filename.includes('talus-7')) {
    return 'design-details';
  }

  // Project images
  if (urlPath.includes('project') || filename.includes('pinnacle') || filename.includes('sonoran') || 
      filename.includes('talus') || filename.includes('home-braxton')) {
    return 'projects';
  }

  // Testimonial images
  if (urlPath.includes('testimonial') || filename.includes('testimonial')) {
    return 'testimonials';
  }

  // About page images
  if (urlPath.includes('about') || filename.includes('summit') || filename.includes('about-banner')) {
    return 'about';
  }

  // Default to design-details for signature design page
  if (context.includes('design-details')) {
    return 'design-details';
  }

  // Default fallback
  return 'misc';
};

// Extract WordPress URLs from a file
const extractWordPressUrls = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const urls = new Set();
  
  // Match various WordPress URL patterns
  const patterns = [
    /https?:\/\/(?:i0\.wp\.com\/)?(?:braxtonhomesaz\.com|braxton\.gosparksites\.com)\/wp-content\/uploads\/[^\s"'`\)]+/gi,
    /url\(['"]?https?:\/\/(?:i0\.wp\.com\/)?(?:braxtonhomesaz\.com|braxton\.gosparksites\.com)\/wp-content\/uploads\/[^"')]+['"]?\)/gi,
  ];

  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      let url = match[0];
      
      // Clean up url() wrapper
      if (url.startsWith('url(')) {
        url = url.slice(4);
      }
      if (url.endsWith(')')) {
        url = url.slice(0, -1);
      }
      // Remove quotes
      url = url.replace(/^['"]|['"]$/g, '');
      
      // Remove query parameters to get full resolution
      url = url.split('?')[0];
      
      // Only add if it's a valid image URL
      if (url.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
        urls.add(url);
      }
    }
  });

  return Array.from(urls);
};

// Download an image
const downloadImage = (url, destPath) => {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === 'https:' ? https : http;
    
    // Ensure directory exists
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(destPath);
    
    client.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirects
        return downloadImage(response.headers.location, destPath).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) {
        fs.unlinkSync(destPath);
      }
      reject(err);
    });
  });
};

// Get filename from URL
const getFilename = (url) => {
  const urlPath = new URL(url).pathname;
  return path.basename(urlPath);
};

// Sanitize filename for filesystem
const sanitizeFilename = (filename) => {
  return filename.replace(/[^a-zA-Z0-9._-]/g, '_');
};

// Scan all TypeScript/TSX files
const scanFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules, .next, etc.
      if (!['node_modules', '.next', '.git', 'out', 'build'].includes(file)) {
        scanFiles(filePath, fileList);
      }
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      fileList.push(filePath);
    }
  });

  return fileList;
};

// Replace URLs in a file
const replaceUrlsInFile = (filePath, urlMapping) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  Object.entries(urlMapping).forEach(([oldUrl, newPath]) => {
    // Handle various URL formats
    const patterns = [
      new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\?[^'"]*/, ''), 'g'),
    ];

    patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, newPath);
        modified = true;
      }
    });
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
};

// Main execution
async function main() {
  console.log('🚀 Starting WordPress Image Migration...\n');

  // Step 1: Scan files and extract URLs
  console.log('📋 Scanning files for WordPress image URLs...');
  const files = scanFiles(path.join(BASE_DIR, 'app'));
  files.push(...scanFiles(path.join(BASE_DIR, 'components')));
  files.push(...scanFiles(path.join(BASE_DIR, 'data')));
  
  const allUrls = new Set();
  const fileContextMap = new Map(); // Track which file contains which URLs

  files.forEach(filePath => {
    const urls = extractWordPressUrls(filePath);
    urls.forEach(url => {
      allUrls.add(url);
      if (!fileContextMap.has(url)) {
        fileContextMap.set(url, []);
      }
      fileContextMap.get(url).push(filePath);
    });
  });

  console.log(`   Found ${allUrls.size} unique WordPress image URLs\n`);

  // Step 2: Categorize and organize URLs
  console.log('📁 Categorizing images...');
  const categorizedUrls = new Map();
  
  allUrls.forEach(url => {
    const context = fileContextMap.get(url)[0] || '';
    const category = categorizeImage(url, context);
    
    if (!categorizedUrls.has(category)) {
      categorizedUrls.set(category, []);
    }
    categorizedUrls.get(category).push(url);
  });

  categorizedUrls.forEach((urls, category) => {
    console.log(`   ${category}: ${urls.length} images`);
  });
  console.log('');

  // Step 3: Download images
  console.log('⬇️  Downloading images...');
  const urlMapping = {};
  let successCount = 0;
  let errorCount = 0;

  for (const [category, urls] of categorizedUrls.entries()) {
    const categoryDir = path.join(PUBLIC_IMAGES_DIR, category);
    
    for (const url of urls) {
      try {
        const filename = getFilename(url);
        const sanitizedFilename = sanitizeFilename(filename);
        const destPath = path.join(categoryDir, sanitizedFilename);
        const localPath = `/images/${category}/${sanitizedFilename}`;

        // Skip if already exists
        if (fs.existsSync(destPath)) {
          console.log(`   ⏭️  Skipping ${filename} (already exists)`);
          urlMapping[url] = localPath;
          continue;
        }

        await downloadImage(url, destPath);
        urlMapping[url] = localPath;
        successCount++;
        console.log(`   ✅ Downloaded ${filename} → ${localPath}`);
      } catch (error) {
        errorCount++;
        console.error(`   ❌ Failed to download ${url}: ${error.message}`);
      }
    }
  }

  console.log(`\n   ✅ Successfully downloaded: ${successCount}`);
  console.log(`   ❌ Failed downloads: ${errorCount}\n`);

  // Step 4: Save mapping file
  console.log('💾 Saving URL mapping...');
  fs.writeFileSync(MAPPING_FILE, JSON.stringify(urlMapping, null, 2), 'utf-8');
  console.log(`   Saved to ${MAPPING_FILE}\n`);

  // Step 5: Replace URLs in code files
  console.log('🔄 Replacing URLs in code files...');
  let filesModified = 0;

  files.forEach(filePath => {
    if (replaceUrlsInFile(filePath, urlMapping)) {
      filesModified++;
      console.log(`   ✅ Updated ${path.relative(BASE_DIR, filePath)}`);
    }
  });

  console.log(`\n   ✅ Modified ${filesModified} files\n`);

  console.log('✨ Migration complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   - Total URLs found: ${allUrls.size}`);
  console.log(`   - Successfully downloaded: ${successCount}`);
  console.log(`   - Failed downloads: ${errorCount}`);
  console.log(`   - Files modified: ${filesModified}`);
}

// Run the script
main().catch(error => {
  console.error('❌ Migration failed:', error);
  process.exit(1);
});

