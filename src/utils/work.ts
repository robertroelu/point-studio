import { getCurrentBreakpoint } from '@finsweet/ts-utils';
import { gsap } from 'gsap';

export const work = () => {
  const workEl = document.querySelectorAll('[work-animation]') as NodeListOf<HTMLElement>;
  if (!workEl) return;

  function animation(el: HTMLElement, delay: number) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
      },
    });
    tl.from(el, {
      opacity: 0,
      duration: 0.5,
      delay: delay,
      ease: 'power1.out',
      y: '20%',
    });
  }

  let delay = 0;
  const breakpoint = getCurrentBreakpoint();
  workEl.forEach((el, index) => {
    if (getCurrentBreakpoint() === 'small' || getCurrentBreakpoint() === 'tiny') {
      animation(el, delay + 0.2);
    } else {
      console.log(delay);
      if (index % 3 !== 2) {
        animation(el, delay);
        delay += 0.2;
      } else {
        animation(el, delay);
        delay = 0;
      }
    }
  });
};
