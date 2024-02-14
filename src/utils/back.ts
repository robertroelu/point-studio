export const back = () => {
  const backEl = document.querySelectorAll('[back]') as NodeListOf<HTMLElement>;
  if (!backEl) return;

  backEl.forEach((el) => {
    el.addEventListener('click', () => {
      window.history.back();
    });
  });
};
