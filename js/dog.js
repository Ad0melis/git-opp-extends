import { Pet } from "./pet.js";

class Dog extends Pet {
    constructor(name, color) {
        super(name, color)
        this.boneCount = 0;
        this.sound = 'Au au'
    }

    bones(count = 1){
        this.boneCount += count;
        console.log(`Rexas: ${this.boneCount} kaulus`);
    }
}

const rexas = new Dog('Rexas', 'black');
const brisius = new Dog('Brisius', 'brown');

export { Dog }