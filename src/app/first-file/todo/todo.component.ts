import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() oddEl: any;

  @Input() isCompletedEl: any;

  @Input() itemData: any;

  @Output() deleteItemEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output() completeItemEvent: EventEmitter<string> =
    new EventEmitter<string>();

  remove(id: string) {
    console.log('id we got before parent', id);
    this.deleteItemEvent.emit(id);
  }

  complete(data: any) {
    console.log('id we got before parent', data);
    this.completeItemEvent.emit(data);
  }
}
