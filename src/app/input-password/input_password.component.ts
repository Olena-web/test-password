import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import update from '../utility/complexity-area';
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
  val = ""
  keyupHandler(event: KeyboardEvent) {
    this.val = (event.target as HTMLInputElement).value;
    update(this.val);
  }
  blurHandler(event: Event) {
    this.val = (event.target as HTMLInputElement).value;
    update(this.val);
  }
  onChange(event: Event) {
    this.val = (event.target as HTMLInputElement).value;
    update(this.val);
  }
  onTouch(event: Event) {
    this.val = (event.target as HTMLInputElement).value;
    update(this.val);
  }

  writeValue(value: string) {
    this.val = value
  }
  registerOnChange(fn: never) {
    this.onChange = fn
  }
  registerOnTouched(fn: never) {
    this.onTouch = fn
  }
  registerkeyUp(fn: never) {
    this.keyupHandler = fn
  }
  registerBlur(fn: never) {
    this.blurHandler = fn
  }
}
