class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Au miau'
    }

    voice(){
        console.log(`${this.name} : ${this.sound}!!`);
    }

    introduction(){
        console.log(`Hello, I am ${this.name} and my fur is ${this.color}`);
    }

}

export { Pet }