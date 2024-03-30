import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstFileComponent } from './first-file/first-file.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstFileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'This is a test of todo list angular project';
}
