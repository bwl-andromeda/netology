class Product{
    #id;
    constructor(name,price,id) {
        this.name = name;
        this.price = price;
        this.#id = id;
    }
    get id() {
        return this.#id;
    }
}

class Fruit extends Product{
    constructor(name,price,id) {
        super(name,price,id);
    }
    buy() {
        console.log('Мы купили продукт!', this);
    }
}


const goods =  [
    new Fruit('Апельсины',70,1),
    new Fruit('Апельсин',72,2),
    new Fruit('Яблоки',76,3),
    new Fruit('Груши',71,4),
    new Fruit('Помидорчики',75,5),

];
//
// console.log(goods);

// console.log(goods.map(good => good.price))
// function filterFruits(fruit) {
//     return fruit.price < 80;
// }

// const filterFruits = (fruit) => fruit.price < 80;

// console.log(filterFruits(goods[0]));
// console.log(filterFruits(goods[1]));
// console.log(filterFruits(goods[2]));
// console.log(filterFruits(goods[3]));
// console.log(filterFruits(goods[4]));

console.log(goods.filter(fruit => fruit.price < 80));
console.log(goods.filter(fruit => fruit.name.toLowerCase().includes('л')).map(item => item.name));

// console.log(goods.filter(filterFruits));


// let a = new Fruit('Яблоко',10,23)
//
// console.log(a)
//
// goods[3].buy()
//
// console.log(goods[2].id)