const Pet = require("../src/pet");

describe("constructor", () => {
  test("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
  test("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });

  test("initial age of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  });
});

describe("growUp", () => {
  test("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });

  test("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  test("increases hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  test("decreases fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
  test("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });

  test("increases fitness by 4", () => {
    const pet = new Pet("fido");
    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  test("increases fitness by 4 to a maximum of 10", () => {
    const pet = new Pet("Fido");
    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe("feed", () => {
  test("decreases hunger by 3", () => {
    const pet = new Pet("fido");
    pet.growUp();
    pet.feed();

    expect(pet.hunger).toEqual(2);
  });

  test("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkup", () => {
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

describe("adoptChild", () => {
  test("adoptChild", () => {
    const parent = new Pet("Gronk");

    expect(parent.children).toEqual([]);
  });

  test("adoptChild", () => {
    const parent = new Pet("Gronk");
    const child = new Pet("Brady");
    parent.adoptChild(child);

    expect(parent.children).toEqual([child]);
  });
});

describe("haveBaby", () => {
  test("haveBaby", () => {
    const parent = new Pet("Lady J");

    expect(parent.children).toEqual([]);
  });

  test("haveBaby", () => {
    const parent = new Pet("Lady J");
    parent.haveBaby("Basher");

    expect(parent.children[0].name).toEqual("Basher");
  });
});