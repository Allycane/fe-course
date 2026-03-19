/**
 * 논리 연산자 : &&, ||
 * 
 * 논리식 = true/false의 결과를 가지는 식
 * 
 * 논리식1(boolean) && 논리식2(boolean)
 * 논리식1(boolean) || 논리식2(boolean)
 * : 두 개의 논리식을 비교하는 것 | 결과값 : boolean
 * 
 *  - && 연산자는 논리식1,2가 모두 true인 경우에만 true 값을 출력
 *  - || 연산자는 논리식1,2 둘 중 하나만 true일 경우에 true 값을 출력
 */

let a = 3;
let b = 7;
console.log('---- && : AND 연산 ----');
console.log((a < b) && (a > b)); // true && false = false
console.log((a < b) && (a == b)); // true && false = false
console.log((a == b) && (a < b)); // false && true = false
console.log((a < b) && (a !== b)); // true && true = true
console.log();
console.log('---- || : OR 연산 ----');
console.log((a == b) || (a > b)); // false || false = false
console.log((a < b) || (a == b)); // true || false = true
console.log((a == b) || (a < b)); // false || true = true
console.log((a < b) || (a !== b)); // true || true = true
// 숏컷 연산 : &&은 하나라도 false가 나오면 결과값이 false이기 때문에 뒤쪽 논리식을 연산할 필요가 없고,
// ||은 하나라도 true가 나오면 결과값이 true이기 때문에 똑같이 스킵할 수 있다.


// 로그인 처리 시 (패스워드 && 아이디) 비교 로직을 구현 - 숏컷 연산


