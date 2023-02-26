import { Component, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import update from '../complexity-area';
@Component({
  selector: 'app-input_password',
  templateUrl: './input_password.component.html',
  styleUrls: ['./input_password.component.sass'],
  providers: [
    {       provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputPasswordComponent),
            multi: true
    }
    ]
})

export class InputPasswordComponent implements ControlValueAccessor {
  hide: true | false = true;
  val= ""

  constructor() { }
  keyupHandler(event: any) {
    this.val = event.target.value;
    update(this.val);
  }
  blurHandler(event: any) {
    this.val = event.target.value;
    update(this.val);
  }
  onChange: any = () => {}
  onTouch: any = () => {}

  set value(val: string){
    if( val !== undefined && this.val !== val){
    this.val = val
    this.onChange(val)
    this.onTouch(val)
    this.keyupHandler(val)
    this.blurHandler(val)
    }
  }

  writeValue(value: string){
    this.value = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }
  registerOnTouched(fn: any){
    this.onTouch = fn
  }
  registerkeyUp(fn: any){
    this.keyupHandler = fn
  }
  registerBlur(fn: any){
    this.blurHandler = fn
  }
}
