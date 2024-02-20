import { gsap } from 'gsap';

export const cta = () => {
  const pageEl = document.querySelector('.page-wrapper') as HTMLElement;
  const ctaEl = document.querySelector('[cta-scroll]') as HTMLElement;
  if (!pageEl || !ctaEl) return;

  ctaEl.style.opacity = '0';

  const pageHeight = pageEl.offsetHeight;
  const windowHeight = window.innerHeight;

  if (pageHeight - 100 > windowHeight) {
    window.onscroll = () => {
      if (window.scrollY > 80) {
        animationIn();
      } else {
        animationOut();
      }
    };
  } else {
    animationIn();
  }

  function animationOut() {
    gsap.to(ctaEl, {
      opacity: 0,
      duration: 0.3,
    });
  }
  function animationIn() {
    gsap.to(ctaEl, {
      opacity: 1,
      duration: 0.3,
    });
  }
};
