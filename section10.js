// 従来
const add = function(a, b) {
  return a + b;
}

console.log(add(1,2));

// アロー関数
const addII = (a, b) => {
  return a + b;
};

console.log(addII(1,2));

const addIII = (a, b) => a + b;
console.log(addIII(1,2));

// 引数1個だとカッコも省略できる
const double = number => 2 * number;
console.log(double(8));

// map関数などもアロー関数つかえる
const numbers = [1,2,3];
let result = numbers.map(number => number * 2);
console.log(result);

const team = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function() {
    return this.members.map((member) => {
      return `${member}は${this.teamName}の所属です。`;
    });
  }
};

console.log(team.teamSummary());