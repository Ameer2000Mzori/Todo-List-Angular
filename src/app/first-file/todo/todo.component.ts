import { Component, Input } from '@angular/core';
import { stringify } from 'uuid';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input()
  oddEl: any;

  @Input()
  isCompletedEl: any;

  @Input()
  itemData: any;

  // @Input() completedFunc!: Function;
  @Input()
  deleteItemFunc!: Function;

  remove(id: string) {
    console.log('id we got before parent', id);
    this.deleteItemFunc(id);
  }
}
