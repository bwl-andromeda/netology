/*
 * Для данного класса мы ничего не будем менять. Здесь он будет
 * таким каким он есть. Для наглядности.
 */
class Bee {
  constructor(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
  }

  fly() {
    console.log(`${this.name} летит`);
  }
}

class QueenBee extends Bee {
  constructor(name, age) {
    super("королева", name, age);
  }
  fly() {
    console.log(
      "Вообще-то благородным не пристало махать крыльями и куда-то летать!\nВсё, что нужно мне, приносят по несколько раз на день."
    );
  }

  /*
   * Необходимо переопределить базовый метод fly, который для всех
   * экземпляров данного класса будет выводить в консоль сообщения:
   *
   *   Вообще-то благородным не пристало махать крыльями и куда-то летать!
   *   Всё, что нужно мне, приносят по несколько раз на день.
   *
   */

  work() {
    console.log(`Я ${this.name}! Я приумножаю данный рой новыми пчёлами`);
  }
}

class DefenderBee extends Bee {
  constructor(name, age) {
    super("страж", name, age);
  }
  fly() {
    console.log(
      `База. База. Я ${this.type}. Совершаю облёт и патрулирование места обитания. Приём.`
    );
  }

  /*
   * Необходимо переопределить базовый метод fly, который для всех
   * экземпляров данного класса будет выводить в консоль сообщение
   * вида:
   *
   *   База. База. Я Грозный. Совершаю облёт и патрулирование места обитания. Приём.
   *
   * где Грозный - это имя экземпляра класса DefenderBee
   */

  work() {
    console.log(`${this.name}. Мои задачи - охранять данный рой.`);
  }
}

class HoneyBee extends Bee {
  constructor(name, age) {
    super("собиратель", name, age);
  }

  fly() {
    if (this.age >= 30) {
      console.log(`${this.type} ${this.name} летит\nЗа водой`);
    }
    else {
        console.log(`${this.name} летит`)
    }
  }

  /*
   * Необходимо переопределить базовый метод fly, который для всех
   * экземпляров данного класса будет выводить в консоль сообщения:
   * - если возраст (age) меньше 30, то
   *
   *     Пчёлка Майя летит
   *
   *   где Пчёлка Майя - это имя (name) данного экземпляра класса
   * - если возраст (age) больше либо равен 30, то
   *
   *     Пчёлка Майя летит
   *     За водой
   *
   *   где Пчёлка Майя - это имя (name) данного экземпляра класса
   */

  work() {
    console.log(`${this.name} собирает пыльцу`);
  }
}

const swarm = [];
const simpleBee = new HoneyBee("Майя", 25);

swarm.push(new QueenBee("Изабелла Великолепная", 127));
swarm.push(new DefenderBee("Охранник", 17));
swarm.push(simpleBee);
swarm.forEach((bee) => {
  bee.fly();
});

simpleBee.age = 32;
simpleBee.fly();
