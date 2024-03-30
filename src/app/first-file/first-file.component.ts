import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { todoData } from './data';

@Component({
  selector: 'app-first-file',
  standalone: true,
  imports: [],
  templateUrl: './first-file.component.html',
  styleUrl: './first-file.component.scss',
})
export class FirstFileComponent {
  newTodoData = todoData;
  logData() {
    console.log(this.newTodoData);
  }

  deleteItem(id: number) {
    this.newTodoData = this.newTodoData.filter((item) => item.id !== id);
  }
}
