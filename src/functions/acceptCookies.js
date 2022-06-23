async function acceptCookies(page) {
  try {
    await page.evaluate(() => {
      const allButtons = document.querySelectorAll("button");
      const acceptCookiesButton = (allButtons[3].innerText = "Accept Cookies"
        ? allButtons[3]
        : null);
      if (acceptCookiesButton) {
        acceptCookiesButton.click();
      } else {
        throw new Error("button not found");
      }
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = acceptCookies;
