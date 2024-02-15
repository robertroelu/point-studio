import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export const animation = () => {
  // Scroll triger animation

  const headerEl = document.querySelector('.home_header_list');
  if (!headerEl) return;

  function scrollAnimation(start: string, end: string, y: number) {
    let tween = gsap.fromTo(
      headerEl,
      {
        y: 0,
      },
      {
        y: y,
        ease: 'none',
        scrollTrigger: {
          trigger: headerEl,
          // start: 'bottom 30%',
          // end: 'bottom 0%',
          start: start,
          end: end,
          scrub: true,
        },
      }
    );
  }

  gsap.matchMedia().add(
    {
      isPortrait: '(max-width: 467px)',
      isTablet: '(max-width: 1149px)',
      isDesktopMini: '(max-width: 1440px)',
      isDesktop: '(max-width: 1920px)',
      isDesktopX: '(max-width: 2560px)',
      isDesktopXL: '(min-width: 2561px)',
    },
    (context) => {
      let { isPortrait, isTablet, isDesktopMini, isDesktop, isDesktopX, isDesktopXL } =
        context.conditions;
      if (isPortrait) {
        scrollAnimation('bottom 10%', 'bottom -5%', -200);
      } else if (isTablet) {
        scrollAnimation('bottom 15%', 'bottom 0%', -300);
      } else if (isDesktopMini) {
        scrollAnimation('bottom 25%', 'bottom 0%', -400);
      } else if (isDesktop) {
        scrollAnimation('bottom 30%', 'bottom 0%', -400);
      } else if (isDesktopX) {
        scrollAnimation('bottom 30%', 'bottom 0%', -600);
      } else if (isDesktopXL) {
        scrollAnimation('bottom 30%', 'bottom 0%', -1000);
      }
    }
  );

  // Letters animation
  const parentEl = document.querySelectorAll('[animation-start]');
  if (!parentEl) return;

  const images: Array<Node> = [];
  parentEl.forEach((parent) => {
    const childEl = parent.querySelectorAll('div');
    childEl.forEach((child) => {
      child.style.opacity = '0';
      images.push(child);
    });
  });

  let initDelay = 1;
  images.forEach((image, index) => {
    const lengthOfImages = images.length / 2;
    if (index < lengthOfImages) {
      initDelay -= 0.1;
    } else {
      initDelay += 0.1;
    }
    gsap.fromTo(
      image,
      {
        opacity: 0.5,
        y: +750,
      },
      {
        opacity: 1,
        duration: 1.1,
        y: 0,
        delay: initDelay,
        ease: 'power2.out',
      }
    );
  });
};
