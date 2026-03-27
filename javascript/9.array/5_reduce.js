/** 
 * 배열의 누적 합을 정하는 메서드
 * - 배열객체.reduce(callback);
 */
const numbers = [1, 2, 3, 4, 5, 36, 57, 33, 1, 59 ];
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
// let sum = numbers.reduce((acc, cur) => { return acc + cur});
console.log(`sum = ${sum}`);
// acc 누적값, cur 현재 값, idx 현재 인덱스, src 원본 배열


let max = numbers.reduce((acc, cur) => Math.max(acc, cur));
let min = numbers.reduce((acc, cur) => Math.min(acc, cur));
console.log(`max = ${max}`);
console.log(`min = ${min}`);
