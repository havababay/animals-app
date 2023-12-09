import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AnimalComponent } from './animal/animal.component';
import { Dog } from '../shared/model/dog';
import { Cat } from '../shared/model/cat';
import { AnimalsSummaryComponent } from './animals-summary/animals-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AnimalComponent, AnimalsSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myDog = new Dog("Muki");
  myCat = new Cat("Shaul");

  animals = [this.myCat, this.myDog];

  printFavorite(name : string) {
    console.log("Favorite animal: " + name);
  }
}
