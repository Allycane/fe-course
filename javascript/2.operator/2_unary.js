/**
 * 단항 연산자 : ++, --, !, !!
 */
let a = 10;
console.log(++a); // 전위, 11, ++을 먼저 찍고 a를 출력
console.log(a++); // 후위, a를 먼저 찍고 ++ 진행, 화면에 찍히는건 11이지만 메모리에는 12로 저장
console.log(a); // 메모리에 저장된 a의 값
console.log();

let b = 10;
console.log(b--); // 10이 먼저 출력되었지만, 메모리에는 9가 저장되어 있음
console.log(--b); // 메모리에 저장된 9에서 '빼기'를 먼저 진행, 결과로 8 출력
console.log(b); // 8
console.log(++b); // 9
console.log(b++); // 출력은 9, 메모리는 10
console.log(b); // 최종 결과값 10
console.log();

let flag = true;
console.log(!flag); // ! - 반대값, false
console.log(!!flag); // !! - 제자리, true
console.log();





