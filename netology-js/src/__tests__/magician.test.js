import Magician from "../Magician";

test("Magician - Правильно создаётся объект!", () => {
  const magician = new Magician("Magician", "Magician");
  const expected = {
    attack: 10,
    defense: 40,
    health: 100,
    level: 1,
    name: "Magician",
    type: "Magician",
    maxHealth: 100,
  };

  expect(magician).toEqual(expected);
});
