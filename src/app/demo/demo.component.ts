import {Component, EventEmitter, Input, model, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  template: `
    <div>
      <div>
        <p>{{ count() }}</p>
        <p>{{ doubleCount() }}</p>
      </div>
      <input type="number" [(ngModel)]="count">
    </div>
  `
})
export class DemoComponent {
  count = model(0);
  doubleCount = model(0);
}
