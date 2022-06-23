const selectors = require("../selectors");

async function getUniqueNames(page) {
  try {
    return await page.evaluate((selectors) => {
      const inviterNodes = document.querySelectorAll(selectors.inviters);
      const joinerNodes = document.querySelectorAll(selectors.joiners);
      const inviters = Array.from(inviterNodes).map(
        (node) => node.innerText
      );
      const joiners = Array.from(joinerNodes).map(
        (node) => node.innerText
      );
      const joinersAndInvitersTogether = joiners.concat(inviters);
      const allNames = joinersAndInvitersTogether
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
