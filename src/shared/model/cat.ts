import { Animal } from "./animal";
import { AnimalSpecies } from "./animal-species";

export class Cat implements Animal{
    name: string;
    species  = AnimalSpecies.Mammel;

    constructor(name: string) {
        this.name = name;
    }
    makeSound(): string {
        return "Meow";
    }
}
