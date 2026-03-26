/**
 * 배열 (Array)
 *  - 동일한 데이터 타입을 가진 요소를 물리적인 공간(Heap)에 연속적으로 저장
 *  - 배열은 참조 데이터 타입이며 저장은 Heap에 생성된다
 *  - [], Array 클래스를 이용하여 객체 생성 - 메서드 호출 가능 ( 자동 변환 ) 
 *  - 배열 객체의 요소는 기본형, 참조형 모두 저장이 가능하다
 */
console.clear();
let array1 = [];
let array2 = new Array(2); // 배열 내 데이터는 없지만 2개짜리의 물리적인 공간이 형성되어 있다
let array3 = new Array(5); // 배열 내 데이터는 없지만 5개짜리의 물리적인 공간이 형성되어 있다

console.log(array1.length, array2.length, array3.length); // 0 2 5
// [] 안에 들어가는 것은 요소가 된다


let names = ['홍길동', '스미스', '이순신'];
let fruits = ['🍎', '🍋', '🍌', '🍊'];
console.log(names.length, fruits.length); // 3 4

// names 배열에 요소 추가
names[3] = '제임스'; 
// 타 언어에서는 인덱스 여유 공간이 없다는 에러가 발생한다
// JavaScript 내에서는 에러가 발생하지 않고, 기존의 배열 자체를 버리고 새로 추가된 배열을 생성한다
// 때문에 메모리 효율성은 떨어지는 방법이다
console.log(names);

