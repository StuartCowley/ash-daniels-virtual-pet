function Pet (name) {
    this.name = name;
    this.age = 0;
    this.growUp = function () {
        this.age += 1;
    };
    this.hunger = 0;
    this.growUp2 = function () {
        this.hunger += 5;
    };
    this.fitness = 10;
    this.growUp3 = function () {
        this.fitness -= 3;
    };
    }
module.exports = Pet; 