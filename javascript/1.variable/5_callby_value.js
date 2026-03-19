/**
 * call by value : 데이터 중복 시 값 복제
 *  - 값이 stack frame에 저장되어 있는 경우 / 하지만 원시 데이터 타입만 가능한 것은 아님
 * 
 */
let number = 100;
let cnumber = number; // number 에 있는 값을 복제를 해서 호출 - call by value

let flag = true;
let cflag = flag; // flag의 true 값을 복제하여 호출

console.log(number, typeof number);
console.log(cnumber, typeof cnumber);
console.log(typeof number === typeof cnumber);
console.log(flag, typeof flag);
console.log(cflag, typeof cflag);
console.log(typeof flag === typeof cflag);






