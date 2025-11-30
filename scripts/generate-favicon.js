#!/usr/bin/env node

/**
 * Generate favicon.ico and icon PNGs from source image
 *
 * Usage:
 *   node scripts/generate-favicon.js [source-image]
 *
 * If no source image provided, uses public/images/logo/braxton-logo.png
 */

const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

// Default logo path
const defaultLogoPath = path.join(__dirname, '..', 'public', 'images', 'logo', 'braxton-logo.png');
const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'app');

async function generateFavicons(sourcePath) {
  try {
    const logoPath = sourcePath || defaultLogoPath;
    console.log(`Using source: ${logoPath}`);

    // Check if we should extract house icon from full logo or use as-is
    const metadata = await sharp(logoPath).metadata();
    const isFullLogo = metadata.width > metadata.height * 1.5; // Wide image = full logo

    let baseImage;
    if (isFullLogo) {
      // Extract just the house icon (left portion) from the full logo
      const extractWidth = Math.floor(metadata.width * 0.3);
      console.log('Extracting house icon from full logo...');
      baseImage = sharp(logoPath).extract({
        left: 0,
        top: 0,
        width: extractWidth,
        height: metadata.height
      });
    } else {
      // Source is already just the icon
      baseImage = sharp(logoPath);
    }

    // Convert to buffer for reuse
    const baseBuffer = await baseImage.png().toBuffer();

    // Define all sizes needed
    const sizes = {
      // ICO sizes (embedded in favicon.ico)
      ico: [16, 32, 48],
      // PNG icons
      png: [
        { size: 32, name: 'icon-32.png' },
        { size: 192, name: 'icon-192.png' },
        { size: 512, name: 'icon-512.png' },
        { size: 180, name: 'apple-icon.png' },
      ]
    };

    // Generate ICO buffers
    console.log('\nGenerating favicon.ico...');
    const icoBuffers = [];
    for (const size of sizes.ico) {
      const buffer = await sharp(baseBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toBuffer();
      icoBuffers.push(buffer);
      console.log(`  - ${size}x${size}`);
    }

    // Create ICO file
    const icoBuffer = await toIco(icoBuffers);
    await fs.promises.writeFile(path.join(appDir, 'favicon.ico'), icoBuffer);
    await fs.promises.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);
    console.log('  Created: app/favicon.ico');
    console.log('  Created: public/favicon.ico');

    // Generate PNG icons
    console.log('\nGenerating PNG icons...');
    for (const { size, name } of sizes.png) {
      const outputPath = path.join(publicDir, name);
      await sharp(baseBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      console.log(`  Created: public/${name} (${size}x${size})`);
    }

    console.log('\n✅ All favicons generated successfully!');
    console.log('\nYour Next.js app will now use:');
    console.log('  - favicon.ico for legacy browsers (16, 32, 48px)');
    console.log('  - icon-32.png for modern browsers');
    console.log('  - icon-192.png for Android/PWA');
    console.log('  - icon-512.png for PWA splash screens');
    console.log('  - apple-icon.png for iOS home screen');

  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

// Accept source image as command line argument
const sourceArg = process.argv[2];
generateFavicons(sourceArg);
