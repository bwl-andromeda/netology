import Bowman from "../Bowman";

test("Bowman - Правильно создаётся объект!", () => {
  const bowman = new Bowman("Bowman", "Bowman");
  const expected = {
    attack: 25,
    defense: 25,
    health: 100,
    level: 1,
    name: "Bowman",
    type: "Bowman",
    maxHealth: 100,
  };

  expect(bowman).toEqual(expected);
});
