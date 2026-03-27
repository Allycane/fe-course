/**
 * 배열의 모든 요소를 순회하면서, callback 함수의 조건을 적용하여 새로운 배열 생성 후 반환
 * - 배열객체.map(callback);
 * 
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fnumbers = [1.123, 2.345, 3.2743];

// numbers의 모든 요소들의 곱하기 100 한 결과를 출력
let mulNum = numbers.map((number) => number * 100);
console.log(mulNum);

// fnumbers의 모든 요소를 정수로 반환
let intNum = fnumbers.map((number) => parseInt(number));
let floorNum = fnumbers.map((number) => Math.floor(number));
let truncNum = fnumbers.map((number) => Math.trunc(number));
console.log(intNum);
console.log(floorNum);
console.log(truncNum);