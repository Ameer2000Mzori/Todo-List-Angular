import { Component } from '@angular/core';
import * as uuid from 'uuid';
import { todoData } from './data';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-first-file',
  standalone: true,
  imports: [FormsModule, TodoComponent, CommonModule],

  templateUrl: './first-file.component.html',
  styleUrl: './first-file.component.scss',
})
export class FirstFileComponent {
  newTodoData;

  constructor() {
    const storedData = localStorage.getItem('localTodoDate');
    this.newTodoData = storedData ? JSON.parse(storedData) : todoData;
  }

  deleteItem(todoID: string) {
    this.newTodoData = this.newTodoData.filter(
      (item: { id: string }) => item.id !== todoID
    );
    localStorage.setItem('localTodoDate', JSON.stringify(this.newTodoData));
  }

  ngOnInit() {
    console.log('Todo Data:', this.newTodoData);
  }

  completed(data: any) {
    this.newTodoData.forEach((item: { id: any; isCompleted: boolean }) => {
      if (item.id === data.id) {
        item.isCompleted = !item.isCompleted;
      }
    });
    console.log('after update', this.newTodoData);
    localStorage.setItem('localTodoDate', JSON.stringify(this.newTodoData));
  }

  // new text
  newTodo: string = '';

  date = new Date();

  addItem() {
    console.log(this.date);
    this.newTodoData.unshift({
      id: uuid.v4(),
      todo: this.newTodo,
      isCompleted: false,
    });
    (this.newTodo = ''), console.log('after add', this.newTodoData);

    localStorage.setItem('localTodoDate', JSON.stringify(this.newTodoData));
  }
}
