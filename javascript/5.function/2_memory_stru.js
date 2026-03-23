/**
 * 함수 생성 및 호출
 * 
 */
// 데이터 타입에 상관없이 add 함수가 정상적으로 실행되도록 문자 => 숫자로 변환하는 함수 생성

import { toNumber } from "../commons/utils.js";

// function toNumber (num1, num2) {
//     //숫자료 변환 후 반환
//     // return num1;
//     // 하나 이상의 값을 반환하려면 객체값을 사용하면 된다
//     return {num1: parseInt(num1), num2: parseInt(num2)};
//     // 오브젝트의 값으로 반환을 진행한다
// }
// // 두 수를 입력하여 합계를 출력

add('100', '200');
add(300, 400);
add(1234, 23845); 
// 호이스팅 (Hoisting) : function 키워드의 함수를 호출 전 메모리에 저장함.
// 때문에 인터프리터 방식의 JavaScript 내에서 함수를 위에서 선언이 가능해진다


function add(num1, num2) { // num1과 num2는 add 블록에서만 존재하는 지역변수로 선언됨
    // // 데이터 타입에 상관없이 add 함수가 정상적으로 실행되도록 문자 => 숫자로 변환하는 함수 생성
    // let n1 = parseInt(num1);
    // let n2 = parseInt(num2);
    let obj = toNumber(num1, num2);
    console.log(`sum = ${obj.num1, obj.num2}`);
}

// arrow 함수를 이용
// 호이스팅 되지 않으므로, 반드시 선언한 후에 호출되어야 함
const add2 = (num1, num2) => {
    // let n1 = parseInt(num1);
    // let n2 = parseInt(num2);
    let obj = toNumber(num1, num2);
    // 데이터 타입에 상관없이 add 함수가 정상적으로 실행되도록 문자 => 숫자로 변환하는 함수 생성
    console.log(`arrow sum = ${obj.num1, obj.num2}`);
}
console.log();

add2(100, 200);
add2('1432', 9804);
// arrow function은 function 과 다르게 호이스팅이 불가능하다, 에러발생

