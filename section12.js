// 従来のデフォルト引数の実装方法
function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET';
  }

  // ajaxのリクエストロジックは省略
  return method;
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));

//ES6からのデフォルト引数
function  makeAjaxRequestII(url, method = 'GET') {
  return method;
}

console.log(makeAjaxRequestII('google.com'));
console.log(makeAjaxRequestII('google.com', 'POST'));

function User(id = generateId()) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User()) {
  user.admin = true;
  return user;
}

let adminUser = createAdminUser();
console.log(adminUser);

const user = new User(10);
console.log(user);
createAdminUser(user);
console.log(user);