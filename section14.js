// 従来
let expense = {
  type: '交際費',
  amount: '4500 JPY',
};

let type = expense.type;
let amount = expense.amount;

console.log(type, amount);

// ES6 分割代入
const { type: typeII, amount: amountII } = expense;
console.log(typeII, amountII);

let saveFile = {
  extension: 'jpg',
  name: 'profile',
  size: 14040,
};

// 用途
function fileSummary({ name, extension, size }, { username }) {
  return `${name}.${extension}の容量は${size}です。名前は${username}`
}

console.log(fileSummary(saveFile, {username: '名前'}));

// 配列に対して
const companies = [
  'google',
  'facebook',
  'uber',
];

const [ name, name2, name3 ] = companies;
console.log(name, name2, name3);

// 中カッコは要素の抽出
const { length } = companies;
console.log(length);

// rest使うと残りの分が配列に代入される
const [name4, ...rest] = companies;
console.log(name4);
console.log(rest);

// 従来
let companiesII = [
  { name: 'google', location: 'マウンテンパーク'},
  { name: 'facebook', location: 'メンロパーク'},
  { name: 'uber', location: 'サンフランシスコ'},
];

const l = companiesII[0].location;

console.log(l);

const [{location: ll}] = companiesII;
console.log(ll);

const Google = {
  locations: ['マウンテンビュー', 'ニューヨーク', 'ロサンゼルス'],
};

const { locations: [first] } = Google;
console.log(first);

function signup({ password, email, birthday, city, username }) {
  // ユーザ作成してDBに保存する
  console.log(username);
  console.log(password);
  console.log(email);
  console.log(birthday);
  console.log(city);
}

const user = {
  username: 'mysqusername',
  password: 'mypassword',
  email: 'sss@gmail.com',
  birthday: '1990/1/1',
  city: '東京'
};

signup(user);

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

console.log(points.map(([x, y]) => {
  return {
    x,
    y,
  }
}));

const numbers = [1, 2, 3];

function double(numbers) {
  const [first, ...remaining] = numbers;
  if (remaining.length === 0) {
    return [first * 2];
  }
  return [first * 2, ...double(remaining)]
}

console.log(double(numbers));