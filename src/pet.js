const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;
const MAXIMUM_AGE = 30;
const MINIMUM_FITNESS = 0;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
  },

  growUp() {
    if (!this.isAlive) {
      return "Your pet is no longer alive";
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness = Math.max(MINIMUM_FITNESS, this.fitness - 3);
  },

  walk() {
    if (!this.isAlive) {
      return "Your pet is no longer alive";
    }
    this.fitness = Math.min(MAXIMUM_FITNESS, this.fitness + 4);
  },

  feed() {
    if (!this.isAlive) {
      return "Your pet is no longer alive";
    }
    this.hunger = Math.max(MINIMUM_HUNGER, this.hunger - 3);
  },

  checkup() {
    if (!this.isAlive) {
      return "Your pet is no longer alive";
    }
    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I need a walk and I am hungry";
    } else if (this.fitness <= 3) {
      return "I need a walk";
    } else if (this.hunger >= 5) {
      return "I am hungry";
    } else {
      return "I feel great!";
    }
  },

  adoptChild(petChild) {
    if (!petChild) {
      return;
    }
    this.children.push(petChild);
  },
};

module.exports = Pet;
