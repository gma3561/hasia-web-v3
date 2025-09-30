import { test, expect } from '@playwright/test';

test.describe('HASIA Website Image Loading Test', () => {
  test('Check all images and assets loading', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://gma3561.github.io/hasia-web-v3/');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Check for any broken images
    const images = await page.$$eval('img', imgs =>
      imgs.map(img => ({
        src: img.src,
        alt: img.alt,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        complete: img.complete,
        currentSrc: img.currentSrc
      }))
    );

    console.log('\n=== IMAGE LOADING REPORT ===\n');
    console.log(`Total images found: ${images.length}`);

    const brokenImages = images.filter(img => img.naturalWidth === 0);

    if (brokenImages.length > 0) {
      console.log('\n❌ BROKEN IMAGES:');
      brokenImages.forEach(img => {
        console.log(`  - ${img.src}`);
        console.log(`    Alt text: ${img.alt || 'none'}`);
      });
    }

    // Check for 404 errors in network
    const failedRequests: string[] = [];

    page.on('response', response => {
      if (response.status() >= 400) {
        failedRequests.push(`${response.status()} - ${response.url()}`);
      }
    });

    // Reload to catch all network requests
    await page.reload();
    await page.waitForLoadState('networkidle');

    if (failedRequests.length > 0) {
      console.log('\n❌ FAILED NETWORK REQUESTS:');
      failedRequests.forEach(req => console.log(`  - ${req}`));
    }

    // Check CSS background images
    const elementsWithBgImage = await page.$$eval('*', elements => {
      return elements
        .filter(el => {
          const style = window.getComputedStyle(el);
          return style.backgroundImage && style.backgroundImage !== 'none';
        })
        .map(el => {
          const style = window.getComputedStyle(el);
          return {
            element: el.tagName,
            class: el.className,
            backgroundImage: style.backgroundImage
          };
        });
    });

    console.log('\n=== BACKGROUND IMAGES ===');
    console.log(`Elements with background images: ${elementsWithBgImage.length}`);
    elementsWithBgImage.forEach(el => {
      console.log(`  - ${el.element}.${el.class}: ${el.backgroundImage}`);
    });

    // Take screenshot for visual inspection
    await page.screenshot({ path: 'website-screenshot.png', fullPage: true });
    console.log('\n📸 Full page screenshot saved as website-screenshot.png');

    // Check console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.reload();

    if (consoleErrors.length > 0) {
      console.log('\n❌ CONSOLE ERRORS:');
      consoleErrors.forEach(err => console.log(`  - ${err}`));
    }

    // Summary
    console.log('\n=== SUMMARY ===');
    console.log(`✓ Total images: ${images.length}`);
    console.log(`${brokenImages.length === 0 ? '✓' : '✗'} Broken images: ${brokenImages.length}`);
    console.log(`${failedRequests.length === 0 ? '✓' : '✗'} Failed requests: ${failedRequests.length}`);
    console.log(`${consoleErrors.length === 0 ? '✓' : '✗'} Console errors: ${consoleErrors.length}`);
  });
});