/**
 * Iterable ( 순회 ) Object : Iteration Protocol 을 준수하는 객체
 * Protocol - 지켜야 하는 규칙
 * - for ... of 구문
 * - String, Array, Set, Map - Built-In Class : 모두 new로 새로운 객체로 생성하여 사용
 * - ...(Spread Operator : 스프레드 연산자 / 전개구문) : 블록 안에서 객체의 데이터를 전개함(펼쳐놓는다)
 * - ...(Rest Parameter) : 매개변수 모든 값을 배열로 저장 - 파라미터 인자값에만 들어감
 * - ...(Destructuring Object : 구조분해 할당) - 객체를 분해하여 변수에 할당
 */

// String 객체 생성 후 for.. of 구문 사용
let strList = new String('Hello~ JavaScript!!');
for ( let str of strList ) {
    console.log(str);
}

//Number 객체 생성 후 for.. of 사용 ❌
// Number class는 Iteration Protocol을 준수하지 않지 않기 때문에 for.. of를 사용할 수 없다
// let numbers = new Number(12345);
// console.clear();
// for ( let number of numbers) {
//     console.log(number);
// };

// Array 객체 생성 후 for.. of 사용
let numbers = [1, 2, 3, 4, 5];
for ( number of numbers ) {
    console.log(number);
}
// forEach 사용
numbers.forEach((number) => console.log(`number = ${number}`));

// 숫자 3 검색
let findNum = numbers.find((number) => ( number === 3 ));
console.log(`출력값 : ${findNum}`);

// 숫자 3의 index
let numIndex = numbers.findIndex((number) => number === 3 );
console.log(`출력 인덱스 : ${numIndex}`);

// 짝수만 출력
let evenNum = numbers.filter((number) => number % 2 == 0 );
console.log(evenNum);
console.log(`짝수는 ${evenNum}`);

/** 
 * JavaScript에서는 0과 1 로 true of false를 구분한다
 * (짝수)%2 = false , (홀수)%2 = true가 되기 때문에 짝수를 구할 경우 !((짝수)%2) = true가 되어 짝수가 정상적으로 출력된다
 */

// map() - 모든 요소에 +10 결과
let plusNum = numbers.map((number) => number + 10 );
console.log(plusNum);

