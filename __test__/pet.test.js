const Pet = require('../src/pet');

  describe('constructor', () => {
    test('returns an object', () => {
      expect(pet).toBeInstanceOf(Object);
    });

    test('sets the name property', () => {
      expect(pet.name).toEqual('Fido');
    });

    test('has initial values', () => {
      expect(pet.age).toEqual(0);
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('growUp', () => {
    test('increments age, hunger, and decreases fitness', () => {
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('walk', () => {
    test('increases fitness to a maximum of 10', () => {
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

    test('increases fitness by 4', () => {
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });
  });

  describe('feed', () => {
    test('decreases hunger by 3', () => {
      pet.growUp();
      pet.feed();
      expect(pet.hunger).toEqual(2);
    });
  });

  describe('checkup', () => {
    test('checks fitness levels', () => {
      pet.fitness = 3;
      expect(pet.checkup()).toEqual("I need a walk");
    });

    test('checks hunger', () => {
      pet.hunger = 6;
      expect(pet.checkup()).toEqual("I am hungry");
    });

    test('checks both fitness and hunger', () => {
      pet.fitness = 3;
      pet.hunger = 6;
      expect(pet.checkup()).toEqual("I need a walk and I am hungry");
    });

    test('checks when pet is doing fine', () => {
      pet.fitness = 6;
      pet.hunger = 3;
      expect(pet.checkup()).toEqual("I feel great!");
    });
  });

  describe('isAlive', () => {
    test('should return false if pet\'s fitness is 0 or less', () => {
      pet.fitness = 0;
      expect(pet.isAlive).toEqual(false);
    });

    test('should return false if pet\'s hunger is 10 or more', () => {
      pet.hunger = 11;
      expect(pet.isAlive).toEqual(false);
    });

    test('should return false if pet\'s age is 30 or more', () => {
      pet.age = 31;
      expect(pet.isAlive).toEqual(false);
    });

    test('should return true if none of the above conditions are met', () => {
      expect(pet.isAlive).toEqual(true);
    });
  });

  describe('having a child', () => {
    test('add a child', () => {
      const petParent = new Pet('Basher');
      const petChild = new Pet('child');
      petParent.adoptChild(petChild);
      expect(petParent.children).toEqual([petChild]);
    });
  });
});
