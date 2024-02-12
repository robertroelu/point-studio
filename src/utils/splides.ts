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
  });

  splide.mount({ AutoScroll });
};
