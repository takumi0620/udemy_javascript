// ES6でのクラスと継承
// classキーワードはes6から
class Car {
  constructor({title}) {
    this.title = title;
  }

  drive() {
    return 'ウィーン';
  }
}

const car = new Car({ title: 'アクア' });
console.log(car.drive());
// ES&からの継承
class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return 'ブブー';
  }
}

const toyota = new Toyota({ title: 'アクア', color: 'red' });
console.log(toyota);
console.log(toyota.drive());