/**
 * String 문자열 클래스
 *  - Character를 하나씩 배열에 저장
 *  - split(), slice(), charAt(), toUpperCase()...
 */
console.clear();

let str = '홍길동';
let strObj = new String('홍길동');
console.log(str, typeof str);
console.log(strObj, typeof strObj);
console.log(str == strObj);
console.log(str === strObj);

console.log();

let str2 = 'Hello~ JavaScript!!';
console.log('str2.length =', str2.length); // 19
console.log('str2.charAt =', str2.charAt(7)); // J - 배열 내 (index)의 값을 출력
console.log();
console.log('str2.toUpperCase =', str2.toUpperCase()); // HELLO~ JAVASCRIPT!!
console.log('str2.toLowerCase =', str2.toLowerCase()); // hello~ javascript!!
console.log();
console.log(str2 + `, next React Programing!!`); // 접합 연산자로 문자열 추가
console.log(str2.concat(`, next React Programing!!`)); // .concat(내용)으로 문자열 추가


let str3 = '                      Hello~ React Programing!!                      ';
console.log(str3.trim(), str3.trim().length); // 공백 삭제 
console.log(str3.trimEnd(), str3.trimEnd().length); // 문자열 기준 뒤쪽 공백 삭제 
console.log(str3.trimStart(), str3.trimStart().length); // 문자열 기준 앞쪽 공백 삭제 
// .length를 추가하여 앞 뒤 공백 포함의 배열의 길이 출력


// 문자열을 구분자를 이용하여 배열 객체로 생성
let fruits = 'apple,lemon,orange'; // 공백도 문자열, 공백없이 진행
let fruits2 = 'apple lemon orange'; // 공백으로 구분자 설정
let fruitsList = fruits.split(','); // 구분자 , 를 기준으로 배열 객체 생성
let fruitsList2 = fruits.split(' '); // 구분자 (공백)을 기준으로 배열 객체 생성
console.log(fruits, typeof fruits); // apple,lemon,orange string
console.log(fruitsList, typeof fruitsList); // [ 'apple', 'lemon', 'orange' ] object
console.log(fruitsList2, typeof fruitsList2); // [ 'apple,lemon,orange' ] object


// 문자열 추출 - 배열로 선언되어 있기 때문에 인덱스를 하나하나 추출할 수 있다
// substring(), slice()
let str4 = 'Hello~ JavaScript!!';
console.clear();
console.log(str4.substring(0, 5)); // 배열의 인덱스 0 ~ 4까지 추출
console.log(str4.slice(0, 5)); // 배열의 인덱스 0 ~ 4까지 추출