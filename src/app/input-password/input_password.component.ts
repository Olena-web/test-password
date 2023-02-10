import {Component} from '@angular/core';
// import {MatInputModule} from '@angular/material/input';
// import {FormsModule} from '@angular/forms';
// import { FormControl } from '@angular/forms';
// import { Validators } from '@angular/forms';


@Component({
  selector: 'app-input_password',
  templateUrl: './input_password.component.html',
  styleUrls: ['./input_password.component.sass'],


})

export class InputPasswordComponent {
  value = '';
  letters = /^[A-Za-z]+$/;
  numbers = /^[0-9]+$/;
  symbols = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
  lettersAndNumbers = /^[a-zA-Z0-9]+$/;
  lettersAndSymbols = /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
  numbersAndSymbols = /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
  lettersAndNumbersAndSymbols = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;

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
        el.classList.add('none');
      }
      );
    }
  else if (value.length <= 8) {
    strong.forEach((el) => {
      el.classList.remove('none');
      el.classList.remove('yellow');
      el.classList.add('red');
  });

}
 if (value.length > 8){
    if ( value.match(this.letters) ) {
  easy();
}
else if (value.match(this.numbers)) {
  easy();
}
else if (value.match(this.symbols)) {
  easy();
}
  else  if (value.match(this.lettersAndNumbers) || value.match(this.lettersAndSymbols) || value.match(this.numbersAndSymbols)) {
  medium();
  }
    else if (value.match(this.lettersAndNumbersAndSymbols)) {
  hard();
  }
}
}
  hide = true;
  password: any;

}

