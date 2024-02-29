const goods =  [
    {name: 'Апельсин',price: 70,id:1},
    {name: 'Яблоко',price:85,id:2},
    {name: 'Мандарины',price: 72,id:3},
    {name: 'Бананы',price: 71,id:4},
    {name: 'Груши',price: 76,id:5},
];

console.log(goods);
// function getProductName(good) {
//     return good.name;
// }

// const getProductName = good => good.name;

// console.log(getProductName(goods[0]));
// console.log(getProductName(goods[1]));
// console.log(getProductName(goods[2]));
// console.log(getProductName(goods[3]));

// console.log(goods.map(getProductName))
console.log(goods.map(good => good.price))