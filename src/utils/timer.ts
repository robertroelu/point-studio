// import moment from 'moment';
import moment from 'moment-timezone';

export const timer = () => {
  const timeEl = document.querySelectorAll('[time]') as NodeListOf<HTMLElement>;
  if (!timeEl) return;

  timeEl.forEach((el) => {
    setInterval(() => {
      const seTimezone = moment.tz('Europe/Stockholm');

      const tens = String(Math.round(seTimezone.milliseconds() / 100));
      const sec = String(seTimezone.seconds()).padStart(2, '0');
      const min = String(seTimezone.minutes()).padStart(2, '0');
      const hour = String(seTimezone.hours()).padStart(2, '0');

      const time = hour + ':' + min + ':' + sec + '.' + tens.padStart(2, '0');

      el.textContent = time;
    }, 100);
  });
};
