/**
 * MDN 사이트에서 Array 클래스 메서드 확인
 * push(), pop(), reduce(), map(), filter(), Array.from()...
 */
let numbers = [1, 2, 3, 4, 5];
let fruits = new Array('🍊', '🍌', '🍋', '🍎', '🍈');

console.log(numbers.length, fruits.length); // 5 5

// 1. Element 추가 : push();
numbers.push(6);
fruits.push('🍉');

console.log(numbers, fruits);

// 2. 요소 출력 : keys();
// 배열의 각 인덱스에 대한 키(value값을 가지고 있는 key)를 포함하는 새로운 배열 반복자 ( Iterator ) 객체를 반환한다
// = key가 없는 배열에서 index를 key로 지정하여 값을 출력한다
let itNumbers = numbers.keys(); // Object [Array Iterator] {} : 객체 타입을 새로 생성하였다
console.log(itNumbers);
for (let key of itNumbers) {
    console.log(`key = ${key}`);
}
/** itNumbers는 numbers의 key값, key값이 없는 배열은 index가 key의 역할을 대신하기 때문에 
 *  key값을 찍어주게 되면 "key = 0" 부터 "key = 5" 까지가 출력된다
*/

/** for... of.. : 확장 for문
 * - for문 안에서 index를 관리 - Iterable Data
 * 
 * for ( 값을 저장하는 변수 선언 of 반복으로 실행하려는 객체 ) {

}
*/
// console.clear();
// for ( let number of numbers ) { // index 0 : 1
//     console.log(`number = ${number}`);
// }

// for ( let fruit of fruits ) {
//     console.log(`fruit = ${fruit}`);
// }


// 3. 요소 삭제 : pop();, splice();
// 3-1 마지막 요소 삭제
console.log(fruits); // [ '🍊', '🍌', '🍋', '🍎', '🍈', '🍉' ]
console.log(`fruits.pop() = ${fruits.pop()}`);
console.log(fruits); // [ '🍊', '🍌', '🍋', '🍎', '🍈' ]
console.log(`fruits.pop() = ${fruits.pop()}`);
console.log(fruits); // [ '🍊', '🍌', '🍋', '🍎' ]

// 3-2 선택적 요소 삭제 및 교체
// splice(삭제하려는 시작 인덱스, 삭제할 갯수, 교체 아이템);
console.clear();
console.log(`fruits.splice(0, 1) = `, fruits.splice(0, 2)); // fruits.splice(0, 1) = [ '🍊', '🍌' ] : 0번지 index 1개 삭제
console.log(fruits); // [ '🍋', '🍎' ] 남은 요소들
console.log(fruits.splice(0, 1, '🥑')); // [ '🍋' ]을 제거 후 [ '🥑' ]로 교체
console.log(fruits); // [ '🥑', '🍎' ] 교체 후 출력된 결과

// 삭제하지 않고 요소 추가
console.log(fruits.splice(0, 0, '🍓')); // 아무것도 삭제하지 않고 [ '🍓' ]로 교체 (추가) - 출력 : []
console.log(fruits); // [ '🍓', '🥑', '🍎' ] 추가된 결과

// 4. 요소 추출 : slice(시작인덱스, 종료인덱스); - 종료인덱스 -1까지 출력
// 결과가 새로운 배열 객체를 생성해서 반환한다
console.log(numbers);
let subNumbers = numbers.slice(0, 3); // 인덱스 0번부터 2번까지 추출 - 새로운 배열로 return
console.log(subNumbers);

// 5. Shallow Copy
/**
 * 배열의 요소가 원시 데이터 타입이면 독립적으로 생성 - 원본 영향 ❌
 * 배열의 요소가 참조 데이터 타입(객체)이면 객체 주소를 공유함 - 원본 영향 ⭕
 * 배열의 요소가 참조 데이터 타입이지만 독립적으로 생성을 하고 싶을 경우 - Deep Copy
 */
const sfruits = ['🥝', '🥥', '🍇'];
const sfruitsCopy1 = sfruits.slice(0, sfruits.length); // 배열 요소의 갯수가 늘어나도 갯수만큼 가져온다
const sfruitsCopy2 = Array.from(sfruits);
// sfruits의 0번지 과일을 '🍓' 로 수정
sfruits[0] = '🍓';

console.log(sfruits);
console.log(sfruitsCopy1);
console.log(sfruitsCopy2);
// 원시 데이터 타입의 객체 - 얕은 복사 - sfruits를 변경해도 sfruitsCopy1과 sfruitsCopy2의 값은 바뀌지 않음


const sfruitsObj = [
    {name: 'kiwi', emoji: '🥝'},
    {name: 'peach', emoji: '🥥'},
    {name: 'grape', emoji: '🍇'}
]
const sfruitsObjCopy1 = sfruitsObj.slice(0, sfruitsObj.length);
const sfruitsObjCopy2 = Array.from(sfruitsObj);
// sfruitsObj의 앞을 변경
sfruitsObj[0].emoji = '🥑';

console.log(sfruitsObj);
console.log(sfruitsObjCopy1);
console.log(sfruitsObjCopy2);
// 참조 데이터 타입의 객체 - 얕은 복사 - sfruitsObj를 변경하면 나머지 복사본들에게도 영향이 미친다

// 6. concat : 배열 객체 결합
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arrConcat = arr1.concat(arr2);
// let arrConcat = arr1.concat(0).concat(arr2);

console.log(arrConcat);
// concat은 얼마든지 chaining이 가능하다


// 7. join(); - 배열 객체를 구분자로 분리하여 문자열로 반환하는 형식
console.log(arrConcat);

let strJoin = arrConcat.join('-'); // 구분자 기본값 : 쉼표
console.log(strJoin, typeof strJoin); // 1,2,3,4,5,6 string

let splitArray = strJoin.split('-');
console.log(splitArray, typeof splitArray); // [ '1', '2', '3', '4', '5', '6' ] object