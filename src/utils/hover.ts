export const hoverAnimation = () => {
  //Get all elements for hover in
  const allElements = document.querySelectorAll('[hover-in]');

  //Separete if it's button or not because the attribute is on text and we need hover on parent element when it's button
  allElements.forEach((el) => {
    const parentEl = el.parentElement;
    const elText: string = el.textContent as string;

    if (parentEl?.hasAttribute('data-button')) {
      parentEl.addEventListener('mouseover', () => {
        animation(el as HTMLElement, elText as string);
      });
    } else {
      el.addEventListener('mouseover', () => {
        animation(el as HTMLElement, elText as string);
      });
    }
  });

  //Fucntion to create array with different sizes
  function arrayOf(text: string, number: number) {
    const lengthOfText = text.length;
    let newElArray = [];
    let j = number;
    for (let index = 0; index < lengthOfText; index += number) {
      newElArray.push(text.substring(index, j));
      j += number;
    }
    return newElArray;
  }

  //Parent function of creating array to get things done with different text sizes
  function createArray(text: string) {
    const lengthOfText = text.length;
    if (lengthOfText >= 6 && lengthOfText <= 11) {
      return arrayOf(text, 2);
    } else if (lengthOfText >= 12 && lengthOfText <= 28) {
      return arrayOf(text, 3);
    } else if (lengthOfText >= 29) {
      return arrayOf(text, 5);
    } else {
      return arrayOf(text, 1);
    }
  }

  //The animation
  function animation(element: HTMLElement, elText: string) {
    element.addEventListener('mouseenter', () => {
      const elArray = createArray(elText);
      const elArrayNew = createArray(elText);
      if (!elArray || !elArrayNew) return;
      const elLength = elArray.length;
      //   let running = false;

      let i = 0;
      const interval = setInterval(() => {
        if (i === elLength - 1) clearInterval(interval);

        // running = true;

        elArray.shift();
        elArray.push(elArrayNew[i]);

        let newText = '';
        elArray.forEach((string) => {
          newText += string;
        });
        element.textContent = newText;

        i++;
      }, 60);
    });
  }

  //   elOnHover.forEach((el) => {
  //     const elText: string = el.textContent as string;
  //     el.addEventListener('mouseenter', () => {
  //       const elArray = Array.from(elText);
  //       const elArrayNew = Array.from(elText);
  //       const elLength = elArray.length;
  //       //   let running = false;

  //       let i = 0;
  //       const interval = setInterval(() => {
  //         if (i === elLength - 1) clearInterval(interval);

  //         // running = true;

  //         elArray.shift();
  //         elArray.push(elArrayNew[i]);

  //         let newText = '';

  //         elArray.forEach((string) => {
  //           newText += string;
  //         });

  //         el.textContent = newText;

  //         i++;
  //       }, 50);
  //     });
  //   });
};
