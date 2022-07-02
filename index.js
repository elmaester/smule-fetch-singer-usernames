#!/usr/bin/env node

const { cookiesPath, puppeteerRunsHeadless } = require("./config");

const puppeteer = require("puppeteer");
const fs = require("fs");
const query = process.argv.slice(2).join("+");
const url = `https://www.smule.com/search?q=${query}&type=recording&sort=recent`;
const selectors = require("./src/selectors");
const autoScroll = require("./src/functions/autoScroll");
const getUniqueNames = require("./src/functions/getUniqueNames");
const acceptCookies = require("./src/functions/acceptCookies");
const saveNames = require("./src/functions/saveNames");

const main = async () => {
  try {
    const cookies = JSON.parse(fs.readFileSync(cookiesPath));
    const browser = await puppeteer.launch({ headless: puppeteerRunsHeadless });
    const [page] = await browser.pages();
    await page.setViewport({
      width: 1920,
      height: 800,
    });
    await page.setCookie(...cookies);
    await page.goto(url);
    await page.waitForTimeout(1000);
    await acceptCookies(page);
    await page.waitForSelector(selectors.inviters);
    await autoScroll(page);
    const uniqueNames = await getUniqueNames(page);
    saveNames(query, uniqueNames);
    await browser.close();
  } catch (e) {
    console.log(e);
  }
};

main();
