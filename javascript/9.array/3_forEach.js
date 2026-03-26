/**
 * forEach 메서드는 Iterator 심볼 객체를 상속한 객체에서 사용됨
 *  - Iterator 상속 객체.forEach(callback);
 *  - Array() -> Iterator를 상속한 객체다 = forEach()를 사용할 수 있다
 */
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((item, idx, obj) => console.log(`numbers item = ${item} | numbers index = ${idx} | numbers = ${obj}`)); // callback 함수 - 함수 형식으로 들어가는 파라미터 : Anonymous Function
// numbers.forEach((numbers가 배열에서 주는 값을 받는 변수) => {})
// Iterator를 상속한 메서드이기 때문에 남은 데이터가 없을 때까지 반복

let fruits = new Array('🍊', '🍌', '🍋', '🍎', '🍈');
// fruits.forEach((fruit, index) => console.log(`과일${index + 1} : ${fruit}`));


console.clear();
// '🍋'을 '🍇'로 변경
fruits.forEach((item, idx) => {
    if (item === '🍋') {
        fruits.splice(idx, 1, '🍇');
    }
})
console.log(fruits);




// 확장 for문
// '🍋'을 '🍇'로 변경
let idx = 0;
for ( let item of fruits ) {
    if (item === '🍋') {
        fruits.splice(idx, 1, '🍇');
    }
}
console.log(`for...of = `, fruits);
// 파라미터로 index를 받아올 수 없다는 차이점이 있다

