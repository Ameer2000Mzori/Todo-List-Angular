import { Component } from '@angular/core';
import * as uuid from 'uuid';
import { todoData } from './data';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
@Component({
  selector: 'app-first-file',
  standalone: true,
  imports: [FormsModule, TodoComponent],

  templateUrl: './first-file.component.html',
  styleUrl: './first-file.component.scss',
})
export class FirstFileComponent {
  newTodoData = todoData;

  deleteItem(todoID: string) {
    this.newTodoData = this.newTodoData.filter((item) => item.id !== todoID);
  }

  ngOnInit() {
    console.log('Todo Data:', this.newTodoData);
  }

  completed(data: any) {
    this.newTodoData.forEach((item) => {
      if (item.id === data.id) {
        item.isCompleted = !item.isCompleted;
      }
    });
    console.log('after update', this.newTodoData);
  }

  // new text
  newTodo: string = '';

  addItem() {
    this.newTodoData.push({
      id: uuid.v4(),
      todo: this.newTodo,
      isCompleted: false,
    });
    (this.newTodo = ''), console.log('after add', this.newTodoData);
  }
}
