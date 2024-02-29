/*
 * Класс Пчела описывает абстракцию. В реальном мире
 * пчёлы организованы в сложную систему - рой или улей (колонию),
 * где у каждого типа особи есть свои обязанности, а значит и описание
 * для каждого типа может отличаться. Поэтому сама по себе Пчела не отражена
 * в реальном мире. Возможные типы пчёл: Собиратель, Страж, Королева и др.
 * Но какой бы ни была Пчела, ей присущи возраст,
 * способность летать, возможно имя. Расширим базовый класс
 * ещё одним свойством - тип пчелы.
 * При реализации других типов Пчёл нет нужды повторяться с таким же набором
 * свойст и методов в классах. Можно унаследоваться от
 * родительского (базового) класса и переиспользовать то, что уже когда-то
 * описано.
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

/*
 * Необходимо описать класс Пчела-Королева, который является
 * потомком от класса Пчела (Bee). Королева, работая, производит
 * новых пчел в рое. Поэтому реализуйте метод
 * work, который выводит в консоль сообщение вида:
 *
 *    Я Мария Медоносная! Я приумножаю данный рой новыми пчёлами
 *
 * где Мария Медоносная – это name объекта.
 */
class QueenBee extends Bee {
  constructor(name, age) {
    super("королева", name, age);
  }
  work() {
    console.log(`Я ${this.name}! Я приумножаю данный рой новыми пчёлами`);
  }
}

/*
 * Необходимо описать класс Пчела-Страж, который является
 * потомком от класса Пчела (Bee). Вот только, работая, пчела-страж
 * выполняет отличные от других обязанности. Поэтому реализуйте метод
 * work, который выводит в консоль сообщение вида:
 *
 *    Страж. Мои задачи - охранять данный рой.
 *
 * где Страж – это name объекта.
 */
class DefenderBee extends Bee {
  constructor(name, age) {
    super("страж", name, age);
  }
  work() {
    console.log(`${this.name}. Мои задачи - охранять данный рой.`);
  }
}

/*
 * Необходимо описать класс Пчела-Собиратель, который является
 * потомком от класса Пчела (Bee). Вот только, работая, пчела-собиратель
 * занимается сбором пыльцы и нектара. Поэтому реализуйте метод
 * work, который выводит в консоль сообщение вида:
 *
 *    Пчёлка собирает пылцу
 *
 * где Пчёлка – это name объекта.
 */
class HoneyBee extends Bee {
  constructor(name, age) {
    super("пчёлка", name, age);
  }
  work() {
    console.log(`${this.name} собирает пылцу`);
  }
}

const swarm = [];

swarm.push(new QueenBee("Изабелла Великолепная", 127));
swarm.push(new DefenderBee("Охранник", 17));
swarm.push(new HoneyBee("Майя", 31));
swarm.forEach((bee) => {
  bee.fly();
  bee.work();
});
