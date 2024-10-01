import {Component, EventEmitter, Input, Output} from '@angular/core';
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
        <p>{{ count }}</p>
        <p>{{ doubleCount }}</p>
      </div>
      <input type="number" [(ngModel)]="countValue">
      <button (click)="updateDoubleCount.emit(countValue)">Set count value</button>
      <button (click)="incrementCount.emit()">Increase count</button>
    </div>
  `
})
export class DemoComponent {
  countValue: number = 0;
  @Input() count: number = 0;
  @Input() doubleCount: number = 0;
  @Output() updateDoubleCount: EventEmitter<number> = new EventEmitter<number>();
  @Output() incrementCount: EventEmitter<void> = new EventEmitter<void>();
}
