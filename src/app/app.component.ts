import { Component } from '@angular/core';
import {DemoComponent} from "./demo/demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-demo
      [count]="count"
      [doubleCount]="doubleCount"
      (updateDoubleCount)="updateCount($event)"
      (incrementCount)="incrementCount()"
    />
  `,
  imports: [
    DemoComponent
  ]
})
export class AppComponent {
  count: number = 0;
  doubleCount: number = 0;

  updateCount(value: number) {
    this.count = value;
    this.setDoubleCount(value)
  }

  incrementCount() {
    this.count++;
    this.setDoubleCount(this.count)
  }

  setDoubleCount(value: number) {
    this.doubleCount = value * 2;
  }
}
