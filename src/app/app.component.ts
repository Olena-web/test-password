import { Component } from '@angular/core';
import { InputPasswordComponent } from './input-password/input_password.component';
import { InputReactiveComponent } from './input-reactive/input-reactive.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test-password';
  input_password: InputPasswordComponent | undefined;
  input_reactive: InputReactiveComponent | undefined;
}
