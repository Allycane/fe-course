/**
 * 사칙연산 : +, -, *, /, % (모듈러, 나머지 연산자), ** (지수 연산자)
 * 
 */
let a = 3;
let b = 5;

console.log(a + b); // 더하기
console.log(a - b); // 빼기
console.log(a * b); // 곱하기
console.log(a / b); // 나누기
console.log(a % b); // 나머지 값
console.log(a ** b); // 3의 5승

// 짝수, 홀수 선택 = 모듈러 연산자
let number = 100;
let number2 = 101;
// number값이 짝수인지, 홀수인지 구분 > number % 2 나머지가 0이면 짝수, 1이면 홀수
console.log(number % 2); // 짝수
console.log(number2 % 2); //나머지

// 접한 연산자(+) : + 기호 앞에 문자열이 출력되는 경우
console.log(10 + 10);
console.log('10' + 10);
console.log('합계 = ', ( 10 + 10));
console.log('홍길동', '이순신' ); // 홍길동 이순신
console.log('홍길동' + "이순신"); // 홍길동이순신
