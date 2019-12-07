function createBookShop(inventory) {
  return {
    inventory, // key valueが同じ名前ならkey不要
    inventoryValue() { // valueがfunctionならfucntion:が不要
      return inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return inventory.find(book => book.title === title);
    }
  }
}

const inventory = [
  { title: 'ハリーポッター', price: 1000 },
  { title: 'javascript入門', price: 1500 },
];

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('ハリーポッター'));