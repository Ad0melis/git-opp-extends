import { Pet } from "./pet.js";

class Cat extends Pet{
    constructor(name, color) {
        super(name, color);
        this.food = 0;
        this.sound = 'Miau miau'
    }

    voice(){
        console.log('Miau miau!!');
    }

    introduction(){
        console.log(`Hello, I am ${this.name} and my fur is ${this.color}`);
    }

    eat(count = 1){
        this.boneCount += count;
        console.log(`As ${this.name} ir turiu ${this.boneCount} kaulus`);
    }
}

export { Cat }