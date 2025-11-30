// Script to extract portfolio images from WordPress site
// Run with: node scripts/extract-portfolio-images.js

const https = require('https');

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function extractImages(portfolioSlug) {
  const url = `https://braxtonhomesaz.com/portfolio-items/${portfolioSlug}/`;
  const html = await fetchPage(url);
  
  // Extract background-image URLs from carousel slides
  const imageRegex = /background-image:\s*url\(["']?([^"')]+)["']?\)/g;
  const images = [];
  let match;
  
  while ((match = imageRegex.exec(html)) !== null) {
    let url = match[1];
    // Remove query parameters to get full resolution
    url = url.split('?')[0];
    // Remove resize parameters
    url = url.replace(/&fit=\d+%2C\d+/, '');
    url = url.replace(/&ssl=1/, '');
    if (url && !images.includes(url)) {
      images.push(url);
    }
  }
  
  return images;
}

async function main() {
  console.log('Extracting images from portfolio pages...\n');
  
  const portfolios = ['pinnacle-canyon', 'sonoran-reserve', 'talus'];
  const results = {};
  
  for (const slug of portfolios) {
    console.log(`Extracting ${slug}...`);
    try {
      const images = await extractImages(slug);
      results[slug] = images;
      console.log(`Found ${images.length} images`);
    } catch (error) {
      console.error(`Error extracting ${slug}:`, error.message);
      results[slug] = [];
    }
  }
  
  console.log('\nResults:');
  console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);

