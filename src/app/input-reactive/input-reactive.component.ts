import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControl } from '@angular/forms';
import update from '../utility/complexity-area';
import { hidePassword } from '../utility/hide';
import { changeValue } from '../utility/helpers';

@Component({
  selector: 'app-input-reactive',
  templateUrl: './input-reactive.component.html',
  styleUrls: ['./input-reactive.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputReactiveComponent),
      multi: true
    }
  ]
})

export class InputReactiveComponent implements ControlValueAccessor {
  password2 = new FormControl('');
  val = "";

  constructor() {
    this.password2.valueChanges.subscribe(value => {
      const complexity: NodeListOf<HTMLElement> = document.querySelectorAll('.complexity');
      if (value !== null) {
        update(value, complexity, complexity[0], complexity[1], complexity[2]);
      }
    }
    );
  }
  onClick() {
    hidePassword();
  }
  onChange(event: Event) {
    changeValue(event);
  }
  onTouch(event: Event) {
    changeValue(event);
  }
  writeValue(value: string) {
    this.val = value
  }
  registerOnChange(fn: (event: Event) => string) {
    this.onChange = fn
  }
  registerOnTouched(fn: (event: Event) => string) {
    this.onTouch = fn
  }
}

