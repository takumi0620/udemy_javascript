function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

console.log(myColors);

const testingTeam = {
  lead: '典子',
  tester: '隆',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: '花子',
  engineer: '次郎',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
// for ofは[Symbol.iterator]を探しに行ってくれる。
// 配列も[Symbol.iterator]が実装されているので配列に対しても使える
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names);

// ES6の動的プロパティ 3がキーになる
const hoge = {
  key: 'vakue',
  [1 + 2]: 'three',
}

console.log(hoge);
console.log(testingTeam);

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('賛成！！', []),
  new Comment('反対！！', []),
  new Comment('うーん', []),
];

const tree = new Comment('こめこめコメント', children);
console.log(tree);
const values = [];
for (let value of tree) {
  values.push(value);
}
console.log(values);