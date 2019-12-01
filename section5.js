let users = [
  {name: '太郎'},
  {name: '次郎'},
  {name: '三郎'}
];

let user = '';
// 従来
users.forEach(function(u) {
  if (u.name === '次郎') {
    user = u.name;
    return;
  }
});

console.log(user);

// ES6の新機能
let user2 = users.find(function(u) {
  return u.name === '次郎';
})

console.log(user2);