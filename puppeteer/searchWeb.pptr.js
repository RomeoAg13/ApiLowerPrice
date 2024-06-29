/**
 * 2024
 * STERAH
 */

const { clickOn, selectAndType, acceptCookies, wait } = require('./utils/helpers.pptr');

const SEARCH_WEB_SELECTOR = {
  cookieBtnGoogle: 'button[id="L2AGLb"]',
  inputSearchBar: 'textarea[title="Rechercher"]',
  selectLink: 'a[jsname="UWckNb"]'

};

async function searchWeb (page) {
  page.logDebug('accept cookies');
  await clickOn(page, SEARCH_WEB_SELECTOR.cookieBtnGoogle);

  page.logDebug('searching in search bar');
  const content = 'iphone 15'; // to change
  await selectAndType(page, SEARCH_WEB_SELECTOR.inputSearchBar, content);

  page.logDebug('press enter to search');
  await page.keyboard.press('Enter');

  page.logStatus(`Search on Web done, looking for : ${content.toUpperCase()}`);
}

async function logLinks (page) {
  const popup = page[page.length - 1];

  try {
    page.logDebug('Logging all links');

    await page.waitForSelector(SEARCH_WEB_SELECTOR.selectLink);

    const links = await page.$$eval(SEARCH_WEB_SELECTOR.selectLink, (elements) => {
      return elements.map((element) => element.href);
    });
    for (let i = 0; i < links.length; i++) {
      page.logDebug(`${links[i]}`);
      await page.goto(links[i]);

      if (popup) {
        page.logDebug(`Accept cookies on ${links[i]}`);
        await acceptCookies(page);
        await wait(5000);
      }
      await page.goBack();
    }

    page.logDebug(`Logged ${links.length} links`);
  } catch (error) {
    page.logError(`Error while logging links: ${error.message}`);
    throw error;
  }
}

module.exports = {
  searchWeb,
  logLinks
};
