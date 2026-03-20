/**
 * 함수에 대한 기본 형식
 * 함수 - 기능을 구현하고 있는 자바스크릡트 객체 : Heap에 생성된다
 * 
 * 1. 일반적인 함수 정의 - Stack Frame에 생성되는 변수명은 함수명이다
 * function 함수명(parameter) {
 *      함수 실행코드;
 *      return 반환값;
 * }
 * 
 * 2. 화살표 함수 ( Arrow Function )
 * const 함수명 = (parameter) => {
 *      함수 실행코드;
 *      return 반환값;
 * }
 * 
 * 3. 자바스크립트 엔진에는 빌트인 함수 ( 내장 함수 ) 가 포함되어 있음
 *  - parseInt() / parsseDouble()...
 *  
 * 4. 함수 호출 : 함수명(parameter);
 * 
 */

// parseInt :: 문자열 -> 정수로 변환
let str1 = '100';
let str2 = '100.1234';
let num1 = parseInt(str1);
let num2 = parseFloat(str2);

console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(num1, typeof num1);
console.log(num2, typeof num2);

// 함수 호출
func_sum();

// 일반 함수 선언
function func_sum() {
    console.log(`func_sum = ${10 + 20}`);
    
}

// 화살표 함수 선언
const arrow_sum = () => {
    console.log(`arrow_sum = ${10 + 20}`);
    
}

// 함수 호출
func_sum();
arrow_sum();

// 일반 function이 있으면 인터프리터가 동작하기 전에 미리 메모리에 선언을 해둔다 - 호이스팅
// 인터프리터 방식에 대응하고 직관적인 arrow function 을 활용하는 것이 좋다 ( ES6 )