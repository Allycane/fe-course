/**
 * 얕은 복사 - Shollow copy : Array.from(original);
 * 객체의 얕은 복사는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 참조 (메모리 내의 같은 값을 가리킴)를 공유하는 복사입니다. 따라서 원본이나 복사본을 변경하면, 다른 객체 또한 변경될 수 있습니다. 
 */
// let a = 100; // 객체 아님 => 대상 아님
// let list = [1, 2, 3, 4, 5] // 객체임 => 요소가 원시형 데이터라 대상 아님
// let list2 = [ {name : '홍길동'}, {name : '이순신'} ] // 객체이자 데이터가 원시형이 아닌 객체이므로 대상임

// >> 객체의 요소가 원시 데이터 타입인 경우에는 독립적으로 관리된다
// >> 객체의 요소가 참조 데이터 타입인 경우에는 주소가 공유된다

//객체의 요소가 원시 데이터 타입인 경우
let fruits = ['사과', '오렌지', '레몬'];
let fruitsCopy = Array.from(fruits); // Shallow Copy 진행
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);
console.log();
fruits[0] = '망고'; // fruit의 데이터가 원시 데이터 이므로 fruitsCopy 에만 변경됨.
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);

// 객체의 요소가 참조 데이터 타임이 같은 경우
let fruitsObj = [
    {'name': '사과', 'emoji':'🍎'},
    {'name': '레몬', 'emoji': '🍏'},
    {'name': '수박', 'emoji': '🍉'}
];
let fruitsObjCopy = Array.from(fruitsObj); // shallow copy
console.log(fruitsObj, typeof fruitsObj);
console.log(fruitsObjCopy, typeof fruitsObjCopy);

console.log();

fruitsObj[0].emoji = '🍌';
console.log(fruitsObj, typeof fruitsObj);
console.log(fruitsObjCopy, typeof fruitsObjCopy);
// 객체 내의 요소들까지 주소가 공유되기 때문에 원본에서 변경하거나 복사본에서 변경한 요소가 그대로 적용되어 출력된다
// 객체의 요소가 원시 데이터 타입인 경우에는 독립적으로 관리되고,
// 객체의 요소가 참조데이터 타입인 경우에는 주소가 공유된다
