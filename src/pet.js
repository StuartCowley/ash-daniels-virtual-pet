const INITIAL_AGE = 0;
const MINIMUM_HUNGER = 0;
const MAX_FITNESS = 10;
const MAX_AGE = 30;
const MAX_HUNGER = 10;
const MINIMUM_FITNESS = 0;

function Pet(name) {
  this.name = name;
  this.age = INITIAL_AGE;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAX_FITNESS;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return (
      this.age < MAX_AGE &&
      this.hunger < MAX_HUNGER &&
      this.fitness > MINIMUM_FITNESS
    );
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.fitness = Math.min(this.fitness + 4, MAX_FITNESS);
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.hunger = Math.max(this.hunger - 3, MINIMUM_HUNGER);
};

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

Pet.prototype.adoptChild = function (child) {
  this.children.push(child);
};

Pet.prototype.haveBaby = function (name) {
  this.children.push(new Pet(name));
};

module.exports = Pet;