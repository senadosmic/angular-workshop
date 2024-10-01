import {Component, inject} from '@angular/core';
import {DemoComponent} from "./demo/demo.component";
import {CountStore} from "./store/count.store";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-demo
      [count]="countStore.count()"
      [doubleCount]="countStore.doubleCount()"
      (countChange)="countStore.updateCount($event)"
    />
  `,
  imports: [
    DemoComponent
  ],
  providers: [CountStore]
})
export class AppComponent {
  protected readonly countStore = inject(CountStore);
}
