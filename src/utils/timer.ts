export const timer = () => {
  setInterval(() => {
    const SEtime = new Date(
      new Date().toLocaleString('de-DE', {
        timeZone: 'Europe/Stockholm',
      })
    );

    const sec = SEtime.getSeconds();
    const min = SEtime.getMinutes();
    const hour = SEtime.getHours();

    const time = hour + ':' + min + ':' + sec;

    const timeEl = document.querySelector('[time]') as HTMLElement;
    timeEl.textContent = time;
  }, 1000);
};
