import { update } from './complexity-area';

export const removeColor = (el: HTMLElement) => {
  el.classList.remove('none');
  el.classList.remove('red');
  el.classList.remove('yellow');
  el.classList.remove('green');
}

export const changeValue = (event: Event) => {
  const strong = document.querySelectorAll('.strong') as NodeListOf<HTMLElement>;
  const complexity = document.querySelectorAll('.complexity') as NodeListOf<HTMLElement>;
  const val = (event.target as HTMLInputElement).value;
  if (event.target === document.getElementById('password')) {
    update(val, strong, strong[0], strong[1], strong[2]);
  } else
    update(val, complexity, complexity[0], complexity[1], complexity[2])
}

