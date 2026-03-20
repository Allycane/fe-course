/**
 * Deep Copy ( 깊은 복사 ) - structuredClone, JSON.parse(JSON.stringify())
 * 객체의 깊은 복사는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 참조(메모리 내의 같은 값을 가리킴)를 공유하지 않는 복사입니다. 
 * 따라서 원본이나 복사본을 변경할 때, 다른 객체가 변경되지 않는 것을 보장할 수 있습니다.
 */

let fruits = [
    {'name': '사과', 'emoji':'🍎'},
    {'name': '레몬', 'emoji': '🍏'},
    {'name': '수박', 'emoji': '🍉'}
];
let fruitsCopy = structuredClone(fruits);
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);

console.log();

fruits[0].emoji = '🍌';
fruitsCopy[2].name = '바나나';
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);
// 출력 결과 별개로 값이 변경된 것을 확인할 수 있다

console.log();

let fruitsCopy2 = JSON.parse(JSON.stringify(fruits));
console.log(`--------------JSON.parse-----------`);
console.log(fruits, typeof fruits);
console.log(fruitsCopy2, typeof fruitsCopy2);

fruitsCopy2[1].emoji = '🍿';
console.log(fruits, typeof fruits);
console.log(fruitsCopy2, typeof fruitsCopy2);
// 깊은 복사로 복사한 데이터들은 독립적인 주소값을 갖기 때문에 값을 변경해도 서로에게 영향을 미치지 않는다.
