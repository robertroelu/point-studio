import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export const animation = () => {
  // Scroll triger animation
  //   const scrollEl = document.querySelector('[scrollTrigger]');
  //   console.log(scrollEl);

  const headerEl = document.querySelector('.home_header_list');
  if (!headerEl) return;
  let tween = gsap.fromTo(
    headerEl,
    {
      y: 0,
    },
    {
      y: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: headerEl,
        start: 'bottom 30%',
        end: 'bottom 0%',
        scrub: true,
      },
    }
  );

  //   let tween = gsap.to('.home_header_list', {
  //     yPercent: -170,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.section_home-header',
  //       start: 'bottom 30%',
  //       end: 'bottom top',
  //       scrub: true,
  //     },
  //   });

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

  // From left to right
  //   let initDelay = 1;
  //   images.forEach((image) => {
  //     initDelay += 0.1;
  //     gsap.fromTo(
  //       image,
  //       {
  //         opacity: 0,
  //         y: -500,
  //       },
  //       {
  //         opacity: 1,
  //         duration: 0.5,
  //         y: 0,
  //         delay: initDelay,
  //       }
  //     );
  //   });
};
