import { gsap } from 'gsap';

export const cta = () => {
  const pageEl = document.querySelector('.page-wrapper') as HTMLElement;
  const ctaEl = document.querySelector('[cta-scroll]') as HTMLElement;
  const topEl = document.querySelector('[scroll-top]') as HTMLElement;
  if (!pageEl || !ctaEl) return;

  ctaEl.style.opacity = '0';

  const pageHeight = pageEl.offsetHeight;
  const windowHeight = window.innerHeight;

  const url = window.location;
  const pathname = url.pathname;

  if (pageHeight - 100 > windowHeight) {
    if (pathname.includes('projects')) {
      topEl.style.display = 'none';
      animationIn();
      return;
    }

    window.onscroll = () => {
      if (window.scrollY > 80) {
        animationIn();
      } else {
        animationOut();
      }
    };
  } else {
    topEl.style.display = 'none';
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
