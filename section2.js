// foreachの説明
var colors = ['red', 'blue', 'yellow'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// ES6の新機能
colors.forEach(function (color) {
  console.log(color);
});

var numbers = [1, 2, 3, 4, 8, 1, 9];
let sum = 0;

numbers.forEach(function (number) {
  sum += number;
});
console.log(sum);

let sum2 = 0;
function adder(number) {
  sum2 += number;
}

// 関数渡しても動く numbers.forEach(adder());はダメです
numbers.forEach(adder);
console.log(sum2);