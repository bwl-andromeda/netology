export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("error: 2 < name.length < 10 characters");
    }

    const validTypes = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (!validTypes.includes(type)) {
      throw new Error("error: invalid character type");
    }

    this.maxHealth = 100;
    this.health = 100;
    this.level = 1;
    this.name = name;
    this.type = type;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("dead");
    }

    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defense = Math.round(this.defense * 1.2);
    this.health = this.maxHealth;
  }
  damage(points) {
    // Проверяем входные данные
    if (typeof points !== "number" || points < 0) {
      throw new Error("Invalid points: must be a non-negative number");
    }

    // Проверяем defense
    if (
      typeof this.defense !== "number" ||
      this.defense < 0 ||
      this.defense > 100
    ) {
      throw new Error("Invalid defense: must be a number between 0 and 100");
    }

    // Расчет damageTaken
    const damageTaken = points * (1 - this.defense / 100);

    // Проверяем, является ли damageTaken NaN
    if (isNaN(damageTaken)) {
      throw new Error("Calculation error: damageTaken is NaN");
    }

    // Уменьшаем здоровье на damageTaken
    this.health -= damageTaken;

    // Убедитесь, что здоровье не опускается ниже 0
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
