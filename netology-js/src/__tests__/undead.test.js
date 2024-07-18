import Undead from "../Undead";
test("Undead - Правильно создаётся объект!", () => {
  const undead = new Undead("Undead", "Undead");
  const expected = {
    attack: 25,
    defense: 25,
    health: 100,
    level: 1,
    name: "Undead",
    type: "Undead",
    maxHealth: 100,
  };
  expect(undead).toEqual(expected);
});
