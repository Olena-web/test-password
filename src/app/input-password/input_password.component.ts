import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { changeValue } from '../utility/helpers';
@Component({
  selector: 'app-input-password',
  templateUrl: './input_password.component.html',
  styleUrls: ['./input_password.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true
    }
  ]
})

export class InputPasswordComponent implements ControlValueAccessor {
  hide: true | false = true;
  val = "";

  keyupHandler(event: KeyboardEvent) {
    changeValue(event);
  }
  blurHandler(event: Event) {
    changeValue(event);
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
  registerkeyUp(fn: (event: Event) => string) {
    this.keyupHandler = fn
  }
  registerBlur(fn: (event: Event) => string) {
    this.blurHandler = fn
  }
}

