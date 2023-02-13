import {Component} from '@angular/core';
import { LETTERS, NUMBERS, SYMBOLS, LETTERS_NUMBERS, LETTERS_SYMBOLS, NUMBERS_SYMBOLS, LETTERS_NUMBERS_SYMBOLS } from '../constants';


@Component({
  selector: 'app-input_password',
  templateUrl: './input_password.component.html',
  styleUrls: ['./input_password.component.sass'],


})

export class InputPasswordComponent {
  value = '';

  update(value: string) { this.value = value; console.log(this.value, value.length);
    const strong = document.querySelectorAll<HTMLElement>('.strong');
    const first = document.getElementById('1');
    const second = document.getElementById('2');
    const third = document.getElementById('3');

    const easy = ()=> {
      strong.forEach((el) => {
        el.classList.remove('none');
        el.classList.remove('red');
        el.classList.remove('yellow');
        el.classList.remove('green');
      })
      first?.classList.add('red');
      second?.classList.add('none');
      third?.classList.add('none');
    }

    const medium = ()=> {
      strong.forEach((el) => {
        el.classList.remove('none');
        el.classList.remove('red');
        el.classList.remove('green');
      })
      first?.classList.add('yellow');
      second?.classList.add('yellow');
      third?.classList.add('none');
    }

    const hard = ()=> {
      strong.forEach((el) => {
        el.classList.remove('none');
        el.classList.remove('red');
        el.classList.remove('yellow');
        el.classList.add('green');
      })
    }


    if (value === '') {
      strong.forEach((el) => {
        el.classList.remove('red');
        el.classList.remove('yellow');
        el.classList.remove('green');
        el.classList.add('none');
      }
      );
    }
  else if (value.length <= 8) {
    strong.forEach((el) => {
      el.classList.remove('none');
      el.classList.remove('yellow');
      el.classList.remove('green');
      el.classList.add('red');
  });

}
 if (value.length > 8){
    if ( value.match(LETTERS) ) {
  easy();
}
else if (value.match(NUMBERS)) {
  easy();
}
else if (value.match(SYMBOLS)) {
  easy();
}
  else  if (value.match(LETTERS_NUMBERS) || value.match(LETTERS_SYMBOLS) || value.match(NUMBERS_SYMBOLS)) {
  medium();
  }
    else if (value.match(LETTERS_NUMBERS_SYMBOLS)) {
  hard();
  }
}
}
  hide = true;
  password: any;

}

