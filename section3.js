// mapの説明
const numbers = [1, 2, 3];
let doubleNumbers = [];
// 従来
for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

console.log(doubleNumbers);

// ES6の新機能のmap
let doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);
let cars = [
  { type: '軽自動車', price: '安い'},
  { type: '高級車', price: '高い'}
];

let prices = cars.map(function(car) {
  return car.price;
})

console.log(prices);