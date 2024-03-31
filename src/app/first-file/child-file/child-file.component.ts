import { Component } from '@angular/core';
import { GarndChildFileComponent } from './garnd-child-file/garnd-child-file.component';

@Component({
  selector: 'app-child-file',
  standalone: true,
  imports: [GarndChildFileComponent],
  templateUrl: './child-file.component.html',
  styleUrl: './child-file.component.scss',
})
export class ChildFileComponent {}
