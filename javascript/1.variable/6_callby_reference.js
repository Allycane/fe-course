/**
 * call by reference : 데이터 중복 시 주소를 복제
 *  - 값이 Heap에 저장되어 있는 경우
 */
let name1 = '홍길동';
let name2 = name1; // call by reference
let name3 = new String('홍길동'); // new - 무조건 Heap에 저장된다
// new 로 붙으면 속성이 객체 ( Object )로써 Heap 에 저잗이 된다
let name4 = name3;

console.log(name1, typeof name1);
console.log(name2, typeof name2);
console.log(name3, typeof name3);
console.log(typeof name1 === typeof name2);
console.log(typeof name1 === typeof name3);
// 결론 : name1과 name2는 문자열로 출력되지만 name3은 객체값으로 출력된다
console.log(typeof name3 === typeof name4);
console.log(typeof name1 === typeof name4);

let nlist = [ 1, 2, 3, 4, 5 ];
let nlist2 = nlist; // call by reference

let person = {
    'name' : '홍길동',
    'age' : 30
};
let person2 = person;

console.log(nlist, typeof nlist);
console.log(nlist2, typeof nlist2);
console.log(typeof nlist == typeof nlist2);
console.log(typeof nlist === typeof nlist2); // nlist와 nlist2의 객체 주소와 타입 동일 여부 비교
console.log(typeof nlist[2] === typeof nlist2[2]); // 데이터가 동일하게 3인가 + type : number 가 동일한지 체크
console.log();
console.log(person, typeof person);
console.log(person2, typeof person2);
console.log(typeof person === typeof person2);
console.log(typeof person.name === typeof person2.name);

// person2의 이름값을 이순신으로 변경
person2.name = '이순신';
console.log(person.name, person2.name); // 동일하게 이순신으로 출력이 된다
// 동일한 주소값을 참조하고 있기 때문에 새로 정의된 값이 갱신되어 적용이 된 것

person2.age = 40;
console.log(person.age, person2.age);
// age는 정수이지만 배열을 통해 하나의 덩어리로써 Heap에 저장된 것이기 때문에 문자열과 같이 정의된 값이 갱신되어 출력된다
// 하지만 단독으로 정수형태의 경우는 stack에 저장이 진행된 것이기 때문에 값이 별도로 출력된다





