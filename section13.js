// 従来
function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers([1,2,3,4,5]));

// rest演算子 可変長引数のようなもの
function addNumbersII(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbersII(1,2,3,4,5,6,7,8,9));

const defaultColors = ['赤', '緑'];
const userFavoriteColors = ['オレンジ', '黄色'];
const fallColors = ['茶', '紅葉'];
console.log(defaultColors.concat(userFavoriteColors));

// spread演算子 配列を展開してくれる
console.log(['青', ...fallColors, '紫', ...defaultColors, ...userFavoriteColors]);

function validateShoppingList(...items) {
  if (items.indexOf('牛乳') < 0) {
    return [...items, '牛乳'];
  }
  return items;
}

console.log(validateShoppingList('牛乳', 'オレンジ', 'パン'));

// restとspreadの使い所
const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log(MathLibrary.calculateProduct(2,3));
console.log(MathLibrary.multiply(2,3));