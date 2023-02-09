import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { FormControl } from '@angular/forms';
/** @title Form field with prefix & suffix */

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
      first?.classList.add('red');
      second?.classList.add('none');
      third?.classList.add('none');
    }
    const medium = ()=> {
      first?.classList.add('yellow');
      second?.classList.add('yellow');
      third?.classList.add('none');
    }
    const hard = ()=> {
      strong.forEach((el) => {
        el.classList.add('green');
      })
    }


    if (value.length === 0) {
      strong.forEach((el) => {
        el.classList.add('none');
      }
      );
    }
  else if (value.length <= 8) {
    strong.forEach((el) => {
       el.classList.add('red');
  });

}
else if (value.match(/[a-zA-Z]+/g) || value.match(/[0-9]+/g)) {
  easy();
}
else if (value.match(/[^A-Za-z0-9]+/g) || value.match(/[0-9]+/g)) {
  medium();
  }
else if (value.match(/[a-zA-Z]+/g) && value.match(/[0-9]+/g) && value.match(/[^a-zA-Z\d]+/g)) {
  hard();
  }
}
  hide = true;
  password: any;

}

