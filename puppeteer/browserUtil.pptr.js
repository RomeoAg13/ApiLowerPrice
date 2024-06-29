/**
 * 2024
 * STERAH
 */
const puppeteer = require('puppeteer');
const { logDebug, logStatus, logServer, logWarning, logError } = require('./utils/logs');

async function initializeBrowser (url) {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    page.logDebug = (message) => logDebug(page, message);
    page.logStatus = (message) => logStatus(page, message);
    page.logServer = (message) => logServer(page, message);
    page.logWarning = (message) => logWarning(page, message);
    page.logError = (message) => logError(page, message);

    page.on('console', (msg) => {
      const messageType = msg.type().toUpperCase();
      const message = `${messageType} - ${msg.text()}`;

      if (messageType === 'LOG') {
        page.logServer(`${message}`);
      } else if (messageType === 'ERR') {
        page.logError(`${message}`);
      }
    });

    await page.goto(url, { waitUntil: 'networkidle2' });

    page.logStatus(`Navigating to URL: ${url}`);

    return { browser, page };
  } catch (error) {
    console.error('\x1b[31m', '❌ Error:', error);
    throw error;
  }
}

module.exports = { initializeBrowser };
