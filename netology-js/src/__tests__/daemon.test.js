import Daemon from "../Daemon";

test("Daemon - Правильно создаётся объект!", () => {
  const daemon = new Daemon("Daemon", "Daemon");
  const expected = {
    attack: 10,
    defense: 40,
    health: 100,
    level: 1,
    name: "Daemon",
    type: "Daemon",
    maxHealth: 100,
  };

  expect(daemon).toEqual(expected);
});
