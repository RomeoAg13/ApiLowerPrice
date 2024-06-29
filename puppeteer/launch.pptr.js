/**
 * 2024
 * STERAH
 */

const { initializeBrowser } = require('./browserUtil.pptr');
const { searchWeb, logLinks } = require('./searchWeb.pptr');

async function run () {
  const url = 'https://www.google.com';
  const { /* browser */ page } = await initializeBrowser(url);

  await searchWeb(page);
  await logLinks(page);
  // await browser.close();
}

run();
