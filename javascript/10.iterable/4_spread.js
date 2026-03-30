/**
 * Spread Operator : 전개 구문
 * 객체가 가지고 있는 요소를 펼쳐 놓음 (전개함)
 * - Iterable Object, Object literal
 * - 함수 호출 : 예 ) myfunction(...객체명); - 보내는 쪽 / 받는 쪽은 Rest Parameter
 * - Array, String, Object Literal : 예 ) let testArray = [...객체명];
 */
// 배열 객체를 복사 : shallow copy - 새로운 객체 생성(요소: 원시데이터 - 독립, 참조데이터 공유)
let numbers = [1, 2, 3, 4, 5];
// let copyNumbers = Array.from(numbers); // array에서만 사용가능
let copyNumbers = [ ...numbers ]; // 객체를 새로 생성하여, numbers의 요소를 펼쳐놓는다
let concatNumbers = [...numbers, 100, ...copyNumbers]; // 이와 같이 객체를 결합하는 것도 가능

console.log(numbers, typeof numbers);
console.log(copyNumbers, typeof copyNumbers);
console.log(concatNumbers, typeof concatNumbers);


// Object Literal 복사
let fruitObj = {
    name: 'apple',
    emoji: '🍎'
}
let copyFruitObj = {...fruitObj};
let updateFruitObj = {
    ...fruitObj,
    color: 'red'
}
console.log(fruitObj, typeof fruitObj);
console.log(copyFruitObj, typeof copyFruitObj);
console.log(updateFruitObj, typeof updateFruitObj);

let list = [
    {...fruitObj}, // deep copy와 같이 새로운 객체가 생성된다
    {...copyFruitObj},
    {...updateFruitObj}
];
console.log(list);