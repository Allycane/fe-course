/**
 * 비교 연산자 : >, <, >=, <=, == (값 비교), === (값 + 데이터 타입 비교)
 *  - 결과 값은 true or false ( boolean )
 *  - 제어문의 조건 비교시 사용, if문, while문 ...
 */
let a = 3;
let b = 7;
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(a == b); // false
console.log(a === b); // false
console.log();

const obj1 = { 'name': '홍길동', 'age': 30 };
const obj2 = { 'name': '홍길동', 'age': '30' };
// 객체는 무조건 다른 주소로 저장이 된다

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name); // 값만 비교하였기 때문에 true가 출력됨
console.log(obj1.name === obj2.name); // 값과 데이터 타입을 비교하였기 때문에 true가 출력됨

console.log(obj1.age == obj2.age); // obj2의 age를 문자열로 저장하였지만 숫자이기 때문에 정수로 취급 | 30 : 30
console.log(obj1.age === obj2.age); // 값 자체는 같지만 저장이 문자열로 저장이 되었기 때문에 다른 데이터 타입으로 fasle | number : string





