// filterの説明
let products = [
  { name: 'きゅうり', type: '野菜', quantity: 0, price: 1},
  { name: 'バナナ', type: 'フルーツ', quantity: 10, price: 15},
  { name: 'セロリ', type: '野菜', quantity: 30, price: 9},
  { name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 1},
];

let filteredProducts = [];
// 従来
for (let i = 0; i < products.length; i++) {
  if (products[i].type === 'フルーツ') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

let filtered = products.filter(function(product) {
  return product.type === '野菜';
});

console.log(filtered);

let filtered2 = products.filter(function(product) {
  return product.type === '野菜'
  && product.quantity > 0
  && product.price < 10;
});

console.log(filtered2);