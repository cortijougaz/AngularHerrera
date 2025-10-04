import {Component} from '@angular/core';

@Component({

  template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="increment(1)">+1</button>
  `
})
export class CounterPageComponent {
  counter = 10;

  increment(value: number):number {
    return this.counter += value;
  }
}
