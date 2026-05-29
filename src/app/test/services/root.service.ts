import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RootService {
  readonly title = signal('Root service singleton');
  readonly tip = signal('Services share data and logic between components.');

  updateTip() {
    this.tip.set('This message comes from a service provided in root.');
  }
}