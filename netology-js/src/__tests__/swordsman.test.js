import Swordsman from "../Swordsman";

test("Swordsman - Правильно создаётся объект!", () => {
  const swordsman = new Swordsman("Swordsman", "Swordsman");
  const expected = {
    attack: 40,
    defense: 10,
    health: 100,
    level: 1,
    name: "Swordsman",
    type: "Swordsman",
    maxHealth: 100,
  };

  expect(swordsman).toEqual(expected);
});
