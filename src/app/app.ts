import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import {Test} from './test/test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Login,
    Signup,
    Test
  ],
  templateUrl: './app.html',
//     template: `<div class="app">
//   <h1>{{ title() }}</h1>
//   <p>Name: {{ name }}</p>
//   <p>Email: {{ email }}</p>
//   <router-outlet></router-outlet>
// </div>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-first-app');
  name: string = 'Hamza';
  email: string = 'hamza@example.com';
  toggle: boolean = false;
  color: number = 1;


  handleClick() {
    alert('Button clicked!');
    this.otherFunction();
  }

  otherFunction() {
    alert('Other function called!');
  }

  handleEvent(event: Event) {
    console.log('Event:', event.type);
    console.log('value:', (event.target as HTMLInputElement).value);
  }
  toggleTwo(){
    this.toggle = !this.toggle;
  }


  handleColorChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.color = parseInt(value, 10);
  }
}
