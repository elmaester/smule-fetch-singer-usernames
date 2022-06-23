#!/opt/nvm/versions/node/v17.5.0/bin/node

const puppeteer = require("puppeteer");
const fs = require("fs");
const url = "https://smule.com";
const query = process.argv.slice(2).join(" ");
const selectors = require("./src/selectors");
const autoScroll = require("./src/functions/autoScroll");
const getUniqueNames = require("./src/functions/getUniqueNames");
const acceptCookies = require("./src/functions/acceptCookies");
const writeNamesToFile = require("./src/functions/writeNamesToFile");

const main = async () => {
  try {
    const cookies = JSON.parse(fs.readFileSync("/home/morket/code/scraping/smule/creds/cookies.json"));
    const browser = await puppeteer.launch({ headless: false });
    const [page] = await browser.pages();
    await page.setViewport({
      width: 1920,
      height: 800,
    });
    await page.setCookie(...cookies);
    await page.goto(url);
    await page.waitForTimeout(2000);
    await acceptCookies(page);
    await page.waitForSelector(selectors.searchButton);
    await page.click(selectors.searchButton);
    await page.keyboard.type(query);
    await page.keyboard.press("Enter");
    await page.waitForSelector(selectors.username1);
    await page.waitForSelector(selectors.seeAllRecordingsButton);
    await page.click(selectors.seeAllRecordingsButton);
    await page.waitForSelector(selectors.username1);
    await autoScroll(page, 100);
    const uniqueNames = await getUniqueNames(page);
    writeNamesToFile(query, uniqueNames);
    await browser.close();
  } catch (e) {
    console.log(e);
  }
};

main();
