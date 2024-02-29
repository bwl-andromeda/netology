/*
 * Где-то закралась ошибка. Вроде всё написано правильно.
 * При прочтении кода кажется, что всё верно.
 * Но код не выполняется. Выдаёт ошибку.
 */
class Customer {
  #pocket = 0;
  #cart = [];

  constructor(name, money) {
    this.name = name;
    this.#pocket = money;
  }

  addOrder(order) {
    this.#cart.push(order);
  }

  removeOrder(order) {
    const orderIndex = this.#cart.findIndex(function (ord) {
      return ord === order;
    });

    if (orderIndex > -1) {
      this.#cart.splice(orderIndex, 1);
    }
  }

  getWhichCanBeSkipped() {
    const result = [];

    this.#cart.forEach((order) => {
      const list = [];
      let totalSumm = this.#cart.reduce(function (summ, ord) {
        summ += ord.price;

        return summ;
      }, 0);

      if (totalSumm <= this.#pocket) {
        return;
      }

      let orderIndex = 0;

      totalSumm -= order.price;
      list.push(order);

      while (orderIndex < this.#cart.length && totalSumm > this.#pocket) {
        const ord = this.#cart[orderIndex];

        if (ord !== order) {
          list.push(ord);
          totalSumm -= ord.price;
        }

        orderIndex++;
      }

      const listSumm = list.reduce(function (summ, ord) {
        summ += ord.price;

        return summ;
      }, 0);

      const theSame = result.find(function (set) {
        return (
          listSumm ===
          set.reduce(function (summ, ord) {
            summ += ord.price;

            return summ;
          }, 0)
        );
      });

      if (!theSame) {
        result.push(list);
      }
    });

    return result;
  }
}

const customer = new Customer("Клим", 570);
const orders = [
  {
    name: "Хлеб",
    price: 36,
  },
  {
    name: "Хлеб",
    price: 36,
  },
  {
    name: "Сметана",
    price: 89,
  },
  {
    name: "Сметана",
    price: 89,
  },
  {
    name: "Йогурт клубничный",
    price: 113,
  },
  {
    name: "Кофе молотый",
    price: 329,
  },
  {
    name: "Батончик",
    price: 17,
  },
];

orders.forEach(function (order) {
  customer.addOrder(order);
});

let whichCanBeSkipped = customer.getWhichCanBeSkipped();

console.log(whichCanBeSkipped);

const theMostCost = whichCanBeSkipped
  .sort(function (first, second) {
    const firstSumm = first.reduce(function (summ, order) {
      summ += order.price;

      return summ;
    }, 0);
    const secondSumm = second.reduce(function (summ, order) {
      summ += order.price;

      return summ;
    }, 0);

    return firstSumm - secondSumm;
  })
  .pop();

theMostCost.forEach(function (order) {
  customer.removeOrder(order);
});

whichCanBeSkipped = customer.getWhichCanBeSkipped();
console.log(whichCanBeSkipped);
