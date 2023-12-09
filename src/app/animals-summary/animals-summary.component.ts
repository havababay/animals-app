import { Component, Input } from '@angular/core';
import { Animal } from '../../shared/model/animal';
import { Dog } from '../../shared/model/dog';
import { Cat } from '../../shared/model/cat';

@Component({
  selector: 'app-animals-summary',
  standalone: true,
  imports: [],
  templateUrl: './animals-summary.component.html',
  styleUrl: './animals-summary.component.css'
})
export class AnimalsSummaryComponent {
  @Input()
  allAnimals : Animal[] = [];

  getDogsCounts() : number{
    return this.allAnimals.filter(animal => animal instanceof Dog).length;
  }

  getCatsCounts() {
    return this.allAnimals.filter(animal => animal instanceof Cat).length;
  }
}
