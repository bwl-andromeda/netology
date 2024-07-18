import Character from "./Character";
export default class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defense = 40;
  }
}
