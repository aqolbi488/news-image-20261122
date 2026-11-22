// Renders page.html to entry.png at exactly 1024x1024 with Playwright + Chrome for Testing.
// The page is a self-contained newspaper layout (no network, no downloaded images);
// rendering is deterministic: same HTML in, same PNG bytes out.
import { chromium } from 'file:///home/hatch/workspace/makefun/shot-tools/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({
  executablePath: '/home/hatch/workspace/makefun/shot-tools/chrome-linux64/chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-device-scale-factor=1'],
});
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto('file://' + join(dir, 'page.html'));
await page.waitForTimeout(400);
await page.screenshot({ path: join(dir, 'entry.png') });
await browser.close();
console.log('rendered entry.png');
