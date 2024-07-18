import Character from "../Character";

describe("Класс - 'Character'", () => {
  test("Создание персонажа с допустимым именем и типом", () => {
    const character = new Character("Alice", "Bowman");
    expect(character.name).toBe("Alice");
    expect(character.type).toBe("Bowman");
    expect(character.health).toBe(character.maxHealth);
    expect(character.level).toBe(1);
  });

  test("Ошибка при создании персонажа с недопустимой длиной имени", () => {
    expect(() => {
      new Character("A", "Bowman");
    }).toThrow("error: 2 < name.length < 10 characters");
  });

  test("Ошибка при создании персонажа с недопустимым типом", () => {
    expect(() => {
      new Character("Alice", "Archer");
    }).toThrow("error: invalid character type");
  });

  test("Повышение уровня персонажа", () => {
    const character = new Character("Alice", "Bowman");
    character.attack = 25;
    character.defense = 25;
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30); // 25 * 1.2
    expect(character.defense).toBe(30); // 25 * 1.2
    expect(character.health).toBe(character.maxHealth);
  });

  test("Нанесение урона персонажу", () => {
    const character = new Character("Alice", "Bowman");
    character.defense = 25; // Устанавливаем уровень защиты
    character.damage(20);
    const expectedHealth = 100 - 20 * (1 - 25 / 100);
    expect(character.health).toBeCloseTo(expectedHealth);
  });

  test("Ошибка при попытке повысить уровень мёртвого персонажа", () => {
    const character = new Character("Alice", "Bowman");
    character.health = 0;
    expect(() => {
      character.levelUp();
    }).toThrow("dead");
  });

  test("Урон устанавливает здоровье на 0 при летальном исходе", () => {
    const character = new Character("Alice", "Bowman");
    character.defense = 25; // Устанавливаем уровень защиты
    character.damage(200); // Наносим урон 200
    console.log("after damage: health =", character.health);
    expect(character.health).toBe(0); // Здоровье должно быть 0
  });

  test("Урон не уменьшает здоровье ниже 0", () => {
    const character = new Character("Alice", "Bowman");
    character.defense = 25; // Устанавливаем уровень защиты
    character.damage(200); // Наносим урон 200
    console.log("after damage: health =", character.health);

    expect(character.health).toBe(0); // Здоровье должно быть 0
  });
  test("Ошибка при передаче некорректных значений points в damage", () => {
    const character = new Character("Alice", "Bowman");

    // Проверяем, что передача строки в points вызывает исключение
    expect(() => {
      character.damage("invalid");
    }).toThrow("Invalid points: must be a non-negative number");

    // Проверяем, что передача отрицательного числа в points вызывает исключение
    expect(() => {
      character.damage(-10);
    }).toThrow("Invalid points: must be a non-negative number");
  });
  test("Ошибка при передаче некорректных значений defense", () => {
    const character = new Character("Alice", "Bowman");

    // Установим некорректное значение defense и проверим, что возникает исключение
    expect(() => {
      character.defense = "invalid";
      character.damage(10);
    }).toThrow("Invalid defense: must be a number between 0 and 100");

    expect(() => {
      character.defense = -5;
      character.damage(10);
    }).toThrow("Invalid defense: must be a number between 0 and 100");

    expect(() => {
      character.defense = 150;
      character.damage(10);
    }).toThrow("Invalid defense: must be a number between 0 and 100");
  });
  test("Ошибка при неправильном расчете damageTaken (NaN)", () => {
    const character = new Character("Alice", "Bowman");

    // Устанавливаем defense в корректное значение
    character.defense = 25;

    // Передаем NaN в points, чтобы вызвать исключение
    const points = NaN;

    // Проверяем, что вызывается исключение с сообщением "Calculation error: damageTaken is NaN"
    expect(() => {
      character.damage(points);
    }).toThrow("Calculation error: damageTaken is NaN");
  });
});
