// 従来のクラス
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'ウィーン';
}

let car = new Car({ title: 'プリウス' });
console.log(car);
console.log(car.drive());

//従来の継承 ES5
function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function() {
  return 'ブブー';
}
const toyota = new Toyota({ color: 'red', title: 'アクア' });
console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());