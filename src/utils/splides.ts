import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export const splides = () => {
  const splideEl = document.querySelector('.splide');
  if (!splideEl) return;
  const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 3,
    gap: '1rem',
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 0.4,
    },
    mediaQuery: 'max',
    breakpoints: {
      479: {
        perPage: 1,
      },
      767: {
        perPage: 1.5,
      },
      991: {
        perPage: 2,
      },
    },
  });

  splide.mount({ AutoScroll });
};
