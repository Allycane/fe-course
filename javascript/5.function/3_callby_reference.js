/**
 * 함수 = 객체이고, Heap에 저장이 된다
 * 일반적인 함수형식 ( Function )으로 선언되면, 호이스팅 되어 전역으로 맨 먼저 힙에 저장이 된다
 */
// 자주 사용하는 함수만 별도로 라이브러리로 생성하여 호출
import { toNumber } from "../commons/utils.js";

function add(num1, num2) {
    let obj = toNumber(num1, num2);
    console.log(`sum = ${obj.num1 + obj.num2}`);
    
}

let add2 = add; // add의 주소를 카피 ( 함수는 객체 )
// Call by Reference

console.log(add, typeof add);
console.log(add2, typeof add2);
console.log(add === add2);



add(100, '200');
add(12312, 52344);