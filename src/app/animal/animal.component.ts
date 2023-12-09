import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>animal works!</p>`,
  styleUrl: './animal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalComponent { }
