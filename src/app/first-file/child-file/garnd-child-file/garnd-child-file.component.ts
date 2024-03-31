import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-garnd-child-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './garnd-child-file.component.html',
  styleUrl: './garnd-child-file.component.scss',
})
export class GarndChildFileComponent {
  color = 'red';

  checkColor(color: string) {
    return color === 'red'
      ? { backgroundColor: 'red' }
      : { backgroundColor: 'blue' };
  }
}
