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

test ('Decrease the hunger level by 3', () => {
  const pet = new Pet ('Fido')

  pet.feed = 3;
  pet.feeding ();

  expect (pet.feed).toEqual(3)
});
});