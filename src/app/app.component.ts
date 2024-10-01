import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {DemoComponent} from "./demo/demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-demo
      [count]="count()"
      [doubleCount]="doubleCount()"
      (countChange)="updateCount($event)"
    />
  `,
  imports: [
    DemoComponent
  ]
})
export class AppComponent {
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  updateCount(value: number) {
    this.count.set(value);
  }
}
