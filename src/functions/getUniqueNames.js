const selectors = require("../selectors");

async function getUniqueNames(page) {
  try {
    return await page.evaluate((selectors) => {
      const usernameNodes1 = document.querySelectorAll(selectors.username1);
      const usernameNodes2 = document.querySelectorAll(selectors.username2);
      const usernames1 = Array.from(usernameNodes1).map(
        (node) => node.innerText
      );
      const usernames2 = Array.from(usernameNodes2).map(
        (node) => node.innerText
      );
      const names1and2 = usernames1.concat(usernames2);
      const allNames = names1and2
        .map((name) => name.trim())
        .filter(
          (name) => name.length && name !== "singers" && name !== "singer"
        );
      const names = [...new Set(allNames)];
      return names;
    }, selectors);
  } catch (e) {
    console.log(e);
  }
}

module.exports = getUniqueNames;
