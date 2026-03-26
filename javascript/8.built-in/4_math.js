/**
 * Math Class
 * - 모든 메서드와 속성이 Static으로 정의되어 있다 - 새로운 객체 생성 불가
 * - 호출 : Math.Method(), Math.Parameter
 * - Math.Random() : 랜덤한 숫자를 출력
 */

let a = 1234.56678;

console.clear();
console.log(`Math.abs(value) :: ${Math.abs(a)}`); // 숫자의 절댓값
console.log(`Math.floor(value) :: ${Math.floor(a)}`); // 소숫점 절삭
console.log(`Math.trunc(value) :: ${Math.trunc(a)}`); // 소숫점 삭제
console.log();
console.log(`Math.round(value) :: ${Math.round(a)}`); // 소숫점 첫째자리에서 반올림하여 정수로 출력
console.log(`Number.toFixed(value) :: ${a.toFixed(2)}`); // 소숫점 둘째자리까지 반올림하여 출력
console.log();
console.log(`Math.max(value) :: ${Math.max(1, 2, 3, 4, 5)}`); // 최댓값
console.log(`Math.min(value) :: ${Math.min(1, 2, 3, 4, 5)}`); // 최솟값
console.log();
console.log(`Math.random(value) :: ${Math.random()}`); // 0 ~ 1 사이의 임의의 값이 출력됨

console.log();

// 1 ~ 100 사이의 숫자를 임의로 생성
let number = Math.floor(Math.random() * 100 + 1);
// 두 자리의 정수를 만들기 위해 * 100
// 0 ~ 1 사이의 소수가 출력되기 때문에 앞자리가 0이 되는 경우를 방지하기 위해 + 1
// 랜덤으로 출력된 소수 * 100 + 1 의 소숫점 아래 수를 모두 버리기 - Math.floor()로 묶어준다

console.log(number);

console.log();

// 1 ~ 100 사이의 숫자를 임의로 생성하는 함수 정의
const randNumber = () => Math.floor(Math.random() * 100 + 1);
console.log(randNumber());