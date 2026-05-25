import { Injectable, signal } from '@angular/core';

@Injectable()
export class CounterService {
  readonly count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }

  reset() {
    this.count.set(0);
  }
}