import {Component} from '@angular/core';
import {signal} from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter: number = 10;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      //this.counter += 1;
      this.counterSignal.update(v => v + 1);
      console.log('Tick');
    }, 2000)
  }

  increaseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0)
  }
}
