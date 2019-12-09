const colors = ['red', 'green', 'blue'];
// for ..of文
for (let color of colors) {
  console.log(color);
}

const aaa = [1,2,3,4];

let total = 0;
for (let number of aaa) {
  total += number;
}
console.log(total);

// genertor
// functionまたは関数名の先頭にに*をつける
function* shopping() {
  // 歩道

  // 歩道を歩いてお店に行く

  // お店に到着したのでお金を持ってお店に入る
  const stuffFromStore = yield 'お金';

  // コインランドリーに到着したので、服を持って入る
  const cleanClathes = yield '汚れた服';

  // 家に歩いて帰る
  return [stuffFromStore, cleanClathes];
}

// お店関連の世界
const gen = shopping();
console.log(gen.next()); // 家から歩道にでる
console.log(gen.next('日用品'));
console.log(gen.next('綺麗な服'));