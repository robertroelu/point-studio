export const timer = () => {
  setInterval(() => {
    const SEtime = new Date(
      new Date().toLocaleString('de-DE', {
        timeZone: 'Europe/Stockholm',
      })
    );

    const sec = SEtime.getSeconds().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });
    const min = SEtime.getMinutes().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });
    const hour = SEtime.getHours().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });

    const time = hour + ':' + min + ':' + sec;

    const timeEl = document.querySelector('[time]') as HTMLElement;
    timeEl.textContent = time;
  }, 1000);
};
