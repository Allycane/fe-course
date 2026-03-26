/**
 * wrapper class - 기본형(원시) 데이터 타입을 객체로 생성하기 위한 클래스 타입
 *  - 기본형(원시) 데이터 타입의 클래스는 첫글자를 대문자로 정의한 Pascalcase로 정의
 *  - Number(클래스) : number(기본형)
 *  - String(클래스) : string(기본형)
 *  - Boolean(클래스) : boolean(기본형)
 *  - 클래스를 통해 객체 생성 시, 메서드 호출이 가능
 *  - 기본형타입.메서드 ==== ( 객체로 자동전환 ) ===> 메서드 정상 실행
 */

let num1 = 100; // 기본형 선언 및 할당
let num2 = new Number(100); // 참조형 선언 및 객체 생성 후 주소 할당

console.log(num1, typeof num1);
console.log(num2, typeof num2); // 출력값 : [Number: 100] object
console.log(num1 == num2); // 출력값 : true
console.log(num1 === num2); // 출력값 : false 
console.log('num1.valueOf() =', num1.valueOf()); // 100
console.log('num2.valueOf() =', num2.valueOf()); // 100

let str1 = '자바스크립트';
// 글자 하나하나를 스트링 배열로 저장. 때문에 length를 통해 배열 길이를 확인할 수 있다
let str2 = new String('자바스크립트');
console.clear();
console.log(str1, typeof str1); // 출력값 : 자바스크립트 string
console.log(str2, typeof str2); // 출력값 : [String: '자바스크립트'] object
console.log(str1 == str2); // 출력값 : true
console.log(str1 === str2); // 출력값 : false
console.log(str1.length); // 출력값 : 6 - 자동으로 객체 전환 후 출력
console.log('str1 typeof =', typeof str1); // 출력값 : str1 typeof = string
// str1 자체 원본 데이터 타입은 변하지 않고, 메서드가 호출될 경우에만 str1이 객체로 변환된 후 출력
console.log(str2.length); // 출력값 : 6

let flag1 = true;
let flag2 = new Boolean(true);
console.log(flag1, typeof flag1); // 출력값 : true boolean
console.log(flag2, typeof flag2); // 출력값 : [ Boolean: true ] object
console.log(flag1 == flag2); // 출력값 : true
console.log(flag1 === flag2); // 출력값 : false


