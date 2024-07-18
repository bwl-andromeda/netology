import Character from "./Character";
export default class Bowerman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 25;
    this.defense = 25;
  }
}
