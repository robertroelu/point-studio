export const scroll = () => {
  const scrollEl = document.querySelectorAll('[scroll-top]');
  if (!scrollEl) return;

  scrollEl.forEach((el) => {
    console.log(el);
    el.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  });
};
