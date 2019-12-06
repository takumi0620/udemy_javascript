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

function Car(model) {
  this.model = model;
}

var cars = [
  new Car('プリウス'),
  new Car('ノート'),
  new Car('アクア'),
];

let car = cars.find(function(car) {
  return car.model === 'アクア';
});

console.log(car);

let posts = [
  { id: 1, title: '古い投稿'},
  { id: 2, title: '新しい投稿'},
];

let comment = { postId: 2, content: 'イイネ！' }

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
};

console.log(postForComment(posts, comment));