let numbers = [10,20,30];
let sum = 0;
// 従来
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

let sumII = numbers.reduce(function(sum, number) {
  return sum + number;
}, /*初期値*/ 0);

console.log(sumII);

let primaryColors = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' },
];

// ['red', 'blue', 'yellow']をmap使わずにreduceで実装してみる
let colors = primaryColors.reduce(function(previous, color) {
  previous.push(color.color);
  return previous;
}, []);

console.log(colors);

function balancedParens(string) {
  return string.split('').reduce(function(previous, charcter) {
    if (previous < 0) {
      return previous;
    }

    if (charcter === '(') {
      return previous + 1;
    }

    if (charcter === ')') {
      return previous - 1;
    }
  }, 0);
};

let result = balancedParens(')(()');
console.log(result);

function unique(array) {
  return array.reduce(function(result, element) {
      let finded = result.find(function(eee) {
        return eee === element;
      });

      if (!finded) {
          result.push(element);
      }

      return result;
  }, []);
}

console.log(unique([1,1,2,3,4,4]));