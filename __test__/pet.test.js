const Pet = require('../src/pet');

describe('constructor', () => {
  test('returns an object', () => {
    const pet = new Pet('Fido');
    expect(pet).toBeInstanceOf(Object);
  });

  test('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });

  test('has an initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });

  test('increments the age by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  test('has an initial hunger of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.hunger).toEqual(0);
  });

  test('increments the hunger by 5', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

test('has a fitness level of 10', () => {
  const pet = new Pet('Fido');
  expect(pet.fitness).toEqual(10);
});


test('Decreases fitness by 3', () => {
  const pet = new Pet('Fido');
  pet.growUp();
  expect(pet.fitness).toEqual(7);
  });

test('walk', () => {
  const pet = new Pet ('Fido');
  
  pet.fitness = 4
  pet.walk(); 

  expect (pet.fitness).toEqual(8);
});

test('increases fitness by to a maxium of 10', () => {
  const pet = new Pet ('Fido');

  pet.fitness = 8;
  pet.walk();

  expect (pet.fitness).toEqual(10);
});

test('Decrease the hunger level by 3', () => {
  const pet = new Pet('Fido');

  pet.growUp();
  pet.feed();   

  expect(pet.hunger).toEqual(2);
});
});


describe ("checkup", () => {
  test("checks pets fitness levels", () => {
    const pet = new Pet("Fido");

    pet.fitness = 3;
    expect(pet.checkup()).toEqual("I need a walk");
  });

  test("checks pets hunger", () => {
    const pet = new Pet("Fido");

    pet.hunger = 6;
    expect(pet.checkup()).toEqual("I am hungry");
  });

  test("checks both fitness and hunger", () => {
    const pet = new Pet("Fido");

    pet.fitness = 3;
    pet.hunger = 6;
    expect(pet.checkup()).toEqual("I need a walk and I am hungry");
  });

  test("checkup, pet is doing fine", () => {
    const pet = new Pet("Fido");

    pet.fitness = 6;
    pet.hunger = 3;
    expect(pet.checkup()).toEqual("I feel great!");
  });
});
