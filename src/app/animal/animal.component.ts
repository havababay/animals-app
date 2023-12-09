import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../shared/model/animal';
import { Dog } from '../../shared/model/dog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css',
})
export class AnimalComponent { 
  @Input()
  currentAnimal : Animal = new Dog("Kinder");

  @Output()
  favoriteAnimal = new EventEmitter<string>;

  favoriteClicked() {
    this.favoriteAnimal.emit(this.currentAnimal.name);
  }
}
