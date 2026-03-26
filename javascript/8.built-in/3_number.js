/**
 * Number 클래스
 *  - valueOf(), toString()...
 * 
 */
console.clear();
let a = 100;
let b = 1234567;
let aa = new Number(100);
let bb = new Number(1234567);
console.log(a, typeof a); // 100 number
console.log(aa, typeof aa); // [Number: 100] object
console.log(b, typeof b); // 1234567 number
console.log(bb, typeof bb); // [Number: 1234567] object

console.log(a.valueOf()); // 100 자동변환 - 원본 데이터 타입 유지
console.log(aa.valueOf()); // 100
console.log(b.valueOf()); // 1234567 자동변환 - 원본 데이터 타입 유지
console.log(bb.valueOf()); // 100

// toLocaleString = 숫자 세자리마다 , 를 찍어주는 함수 | , 는 문자열이기 떄문에 숫자를 문자열로 변환한다
console.log(a.toLocaleString(), typeof a.toLocaleString()); // string
console.log(aa.toLocaleString(), typeof aa.toLocaleString()); // string
console.log(b.toLocaleString(), typeof b.toLocaleString()); // string
console.log(bb.toLocaleString(), typeof bb.toLocaleString()); // string

let localeNum = b.toLocaleString();
console.log(localeNum, typeof localeNum); // string

// toLocaleString 은 문자열에는 적용되지 않는다
let number = '1234986654';
// 문자열을 숫자로 변환 후 바로 toLocaleString 적용
// Function(Method) Chaining - 함수를 연달아 적용하는 것
let locNumber = Number.parseInt(number).toLocaleString();
console.log('locNumber = ', locNumber);

console.log();

let fnumber = '1234.4986654';
let flocNumber = parseFloat(fnumber).toLocaleString();
console.log('flocNumber = ', flocNumber); // flocNumber = 1,234.499

// toFixed() - 반올림
let fnumber2 = '1234.4986654';
let flocNumber2 = parseFloat(fnumber2).toLocaleString();
let fixLocNumber2 = parseFloat(fnumber2).toFixed(); // 소숫점 첫째자리 반올림, 출력되는 소숫점 자리수
let fixLocNumber3 = parseFloat(fnumber2).toFixed(2); // 소숫점 셋째자리 반올림, 출력되는 소숫점 자리수
console.log('flocNumber2 = ', flocNumber2);
console.log('fixLocNumber2 = ', fixLocNumber2);
console.log('fixLocNumber3 = ', fixLocNumber3);

