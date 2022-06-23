async function autoScroll(
  page,
  step = 1000,
  interval = 50,
  idlePassesToConfirm = 50,
  maxDuration = 60000
) {
  try {
    await page.evaluate(
      async (_step, _interval, _idlePassesToConfirm, _maxDuration) => {
        await new Promise((resolve, reject) => {
          let lastHeight = 0;
          let idlePasses = 0;
          const startTime = new Number(new Date());
          let timer = setInterval(() => {
            let scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, _step);

            if (lastHeight === scrollHeight) {
              idlePasses++;
            } else {
              idlePasses = 0;
              lastHeight = scrollHeight;
            }

            if (
              idlePasses >= _idlePassesToConfirm ||
              new Number(new Date()) - startTime >= _maxDuration
            ) {
              clearInterval(timer);
              resolve();
            }
          }, _interval);
        });
      },
      step,
      interval,
      idlePassesToConfirm,
      maxDuration
    );
  } catch (e) {
    console.log(e);
  }
}

module.exports = autoScroll;
