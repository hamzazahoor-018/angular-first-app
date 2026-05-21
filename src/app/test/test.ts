import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  color: string = "red";
  users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];


  students = [
    { name: 'Alice', email: 'alice@example.com', age: 20 },
    { name: 'Bob', email: 'bob@example.com', age: 22 },
    { name: 'Charlie', email: 'charlie@example.com', age: 19 },
    { name: 'David', email: 'david@example.com', age: 21 },
    { name: 'Eve', email: 'eve@example.com', age: 20 }
  ];

  x : number = 0;
  count = signal(0);
  //Writable and computed signals
  data : WritableSignal<number | string> = signal(0);

  updateData() {
    this.data.set(`Data updated at ${new Date().toLocaleTimeString()}`);
    // this.data.update(n => n + 1); //can't happen because data is string after first update, so we need to reset it to number before updating 
  }

  a = signal(10);
  b = signal(20);
  sum = computed(() => this.a() + this.b());

  showValue() {
    console.log(this.sum());
    this.a.set(1000);
    console.log(this.sum());

  }

  //use of effect
  countEffect = signal(0);
  displayToggle : boolean = false;
  constructor() {
    effect(() => {
      // console.log(`Count value: ${this.countEffect()}`);
      if(this.countEffect() === 2){
        this.displayToggle = true;
        setTimeout(() => {
          this.displayToggle = false;
        }, 2000);
      }else{
        this.displayToggle = false;
      }
    });
  }

  increment() {
    this.countEffect.update(n => n + 1);
  }





  handleColorChange(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
  handleClick(val : string) {
    this.color = val;
  }

}
