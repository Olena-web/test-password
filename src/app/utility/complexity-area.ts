import { LETTERS, NUMBERS, SYMBOLS, LETTERS_NUMBERS, LETTERS_SYMBOLS, NUMBERS_SYMBOLS, LETTERS_NUMBERS_SYMBOLS } from './constants';
import { removeColor } from './helpers';

export const update = function (value: string, complexity: NodeListOf<HTMLElement>, first: HTMLElement, second: HTMLElement, third: HTMLElement) {

  const easy = () => {
    first?.classList.add('red');
    second?.classList.add('none');
    third?.classList.add('none');
  }

  const medium = () => {
    first?.classList.add('yellow');
    second?.classList.add('yellow');
    third?.classList.add('none');
  }

  const hard = () => {
    complexity.forEach((el) => {
      el.classList.add('green');
    })
  }

  if (value === '') {
    complexity.forEach((el) => {
      removeColor(el);
      el.classList.add('none');
    }
    )
  }

  if (value) {
    complexity.forEach((el) => {
      removeColor(el);
    });

    if (value.length <= 8) {
      complexity.forEach((el) => {
        el.classList.add('red')
      }
      )
    }
    if (value.length > 8) {
      if (value.match(LETTERS) || value.match(NUMBERS) || value.match(SYMBOLS)) {
        easy();
      }
      else if (value.match(LETTERS_NUMBERS) || value.match(LETTERS_SYMBOLS) || value.match(NUMBERS_SYMBOLS)) {
        medium();
      }
      else if (value.match(LETTERS_NUMBERS_SYMBOLS)) {
        hard();
      }
    }
  }
}
export default update;
