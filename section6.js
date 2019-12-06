let computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

// 従来
let allCompiutersCanRun = true;
let someComputersCanRun = false;
// 16GBのRAM
for (let i = 0; i < computers.length; i++) {
  let computer = computers[i];
  if (computer.ram < 16) {
    allCompiutersCanRun = false;
  } else {
    someComputersCanRun = true;
  }
}

console.log(allCompiutersCanRun);
console.log(someComputersCanRun);

// every 全ての要素にあてはまるか
let everyComputer = computers.every(function(computer) {
  return computer.ram >= 16;
});

console.log(everyComputer);

// some 一つでも含まれるか
let someComputer = computers.some(function(computer) {
  return computer.ram >= 16;
});

console.log(someComputer);

let names = [
  'けん',
  'はなこ',
  'そういちろう',
];

let everyName = names.every(function(name) {
  return name.length >= 3;
});
console.log(everyName);

let someName = names.some(function(name) {
  return name.length >= 3;
});

console.log(someName);

function Field(value) {
  this.value = value;
};

Field.prototype.validate = function() {
  return this.value.length > 0;
};

let username = new Field('my_username');
let password = new Field('my_password');
let birthday = new Field('my_birthday');

console.log(username.validate());

let fields = [
  username,
  password,
  birthday,
];

let everyFields = fields.every(function(field) {
  return field.validate();
});

console.log(everyFields);

if (everyFields) {
  console.log('OK');
} else {
  console.log('NG');
}