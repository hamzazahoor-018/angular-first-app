import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ShortPipe } from './pipes/short.pipe';
import { TagsPipe } from './pipes/tags.pipe';
import { RootService } from './services/root.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-test',
  imports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    ClickOutsideDirective,
    ShortPipe,
    TagsPipe,
  ],
  providers: [CounterService],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  readonly rootService = inject(RootService);
  readonly counterService = inject(CounterService);

  color: string = 'red';
  favoriteColor = 'teal';
  directiveTheme = 'electric';
  showBuiltInDemo = true;
  boxVisible = false;
  selectedLayout: 'card' | 'list' | 'grid' = 'card';
  userName = 'Angular learner';
  statusMessage = 'Hover the card or edit the name to see directives react.';

  users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  tags = ['singleton', 'shared', 'async'];
  pipeDemoText =
    'Angular pipes format values in templates while services keep logic and data reusable across the app.';
  releaseDate = new Date('2026-05-26T09:00:00.000Z');
  totalCost = 2499.99;
  serviceSnapshot = {
    category: 'Angular',
    topic: 'pipes + services',
    level: 'beginner-friendly',
  };

  students = [
    { name: 'Alice', email: 'alice@example.com', age: 20 },
    { name: 'Bob', email: 'bob@example.com', age: 22 },
    { name: 'Charlie', email: 'charlie@example.com', age: 19 },
    { name: 'David', email: 'david@example.com', age: 21 },
    { name: 'Eve', email: 'eve@example.com', age: 20 }
  ];

  directiveItems = ['*ngIf', '*ngFor', '*ngSwitch', 'ngClass', 'ngStyle', 'ngModel'];

  x: number = 0;
  count = signal(0);
  // Writable and computed signals
  data: WritableSignal<number | string> = signal(0);

  updateData() {
    this.data.set(`Data updated at ${new Date().toLocaleTimeString()}`);
    // this.data.update(n => n + 1); // can't happen because data is string after first update, so we need to reset it to number before updating
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
  displayToggle: boolean = false;
  constructor() {
    effect(() => {
      if (this.countEffect() === 2) {
        this.displayToggle = true;
        setTimeout(() => {
          this.displayToggle = false;
        }, 2000);
      } else {
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

  handleClick(val: string) {
    this.color = val;
  }

  changeTheme(theme: string) {
    this.directiveTheme = theme;
  }

  toggleBuiltInDemo() {
    this.showBuiltInDemo = !this.showBuiltInDemo;
  }

  toggleBox() {
    this.boxVisible = !this.boxVisible;
  }

  updateSelectedLayout(layout: 'card' | 'list' | 'grid') {
    this.selectedLayout = layout;
  }

  trackDirectiveItem(index: number, item: string) {
    return item;
  }

  addTag() {
    this.tags.push(`tag-${this.tags.length + 1}`);
  }

  updateServiceTip() {
    this.rootService.updateTip();
  }

  incrementWorkshopCounter() {
    this.counterService.increment();
  }

  resetWorkshopCounter() {
    this.counterService.reset();
  }

}
