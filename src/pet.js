const MAXIMUM_FITNESS = 10;
const INITIAL_AGE = 0;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
  }
  
  Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  }

  Pet.prototype.walk = function () {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
    this.fitness += 4;
  } else { 
    this.fitness = MAXIMUM_FITNESS;
  }

  Pet.prototype.feed = function () {
    this.hunger = this.hunger - 3;
  }

  Pet.prototype.checkup = function () {
    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I need a walk and I am hungry";
    } else if (this.fitness <= 3) {
      return "I need a walk";
    } else if (this.hunger >= 5) {
      return "I am hungry";
    } else {
      return "I feel great!";
    }
  };
};
  
  module.exports = Pet;
