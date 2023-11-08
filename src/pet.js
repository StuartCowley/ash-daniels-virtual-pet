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
    this.feed -=3;

  Pet.prototype.walk = function () {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
    this.fitness += 4;
  } else { 
    this.fitness = MAXIMUM_FITNESS;
  }
}

Pet.prototype.feeding = function () {
  if ((this.hunger = 0) <= MINIMUM_HUNGER ) {
    return "Your pet has starved and died!"
  }
}

  };
  
  module.exports = Pet;
