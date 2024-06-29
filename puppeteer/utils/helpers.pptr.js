/**
 * 2024
 * STERAH
 */

const HELPERS_SELECTOR = {
  acceptCookies: '"//*[contains(text(), \'Accepter\')]"',
  popupCookie: '"//*[contains(text(), \'popup\')]"'
};
async function clickOn (page, selector) {
  await page.logDebug(`Clicking on ${selector}`);
  await page.click(selector);
  await page.logDebug(`${selector} clicked`);
}

async function selectAndType (page, selector, content) {
  await page.logDebug(`Typing ${content} in ${selector}`);
  await page.waitForSelector(selector);
  await page.logDebug(`${selector} found`);
  await clickOn(page, selector);
  await page.logDebug(`Clicking on ${selector}`);
  await page.type(selector, content);
  await page.logDebug(`${content} typed in ${selector}`);
}

async function acceptCookies (page, selector) {
  await page.logDebug('Accepting cookies');
  await page.waitForSelector(HELPERS_SELECTOR.popupCookie);
  await page.logDebug('Popup found');
  await page.clickOn(HELPERS_SELECTOR.popupCookie);
  await page.logDebug('Popup clicked');
  await page.waitForSelector(HELPERS_SELECTOR.acceptCookies);
  await page.logDebug('Accept cookies found');
  await page.clickOn(HELPERS_SELECTOR.acceptCookies);
  await page.logDebug('Cookies accepted');
}

async function wait (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
module.exports = {
  clickOn,
  selectAndType,
  acceptCookies,
  wait,
  HELPERS_SELECTOR
};
