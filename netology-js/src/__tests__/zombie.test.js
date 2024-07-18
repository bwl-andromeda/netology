import Zombie from "../Zombie";
test("Zombie - Правильно создаётся объект!", () => {
  const zombie = new Zombie("Zombie", "Zombie");
  const expected = {
    attack: 40,
    defense: 10,
    health: 100,
    level: 1,
    name: "Zombie",
    type: "Zombie",
    maxHealth: 100,
  };

  expect(zombie).toEqual(expected);
});
