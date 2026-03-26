/**
 * Global : 전역함수로 최상위 객체인 Window 객체에서 호출되는 함수
 *  - 호출방법 : window.함수명
 *  - 객체명 생략 가능 : 함수명()
 *  - alert ( window.alert ), window.confirm
 *  - Number.parseInt / Number.parseFloat / Number.valueOf (Number 함수이지만 Window에서도 호출이 가능 = 많이 사용됨)
 * 
 * 
 * 전역객체
 *  - encodeURI(), decodeURI()...
 *  encodeURI() 함수는 URI의 특정한 문자를 UTF-8로 인코딩해 하나, 둘, 셋, 혹은 네 개의 연속된 이스케이프 문자로 나타냅니다.
 */
console.clear();
let number = '123.4567';
let intNumber = Number.parseInt(number);
let intNumber2 = parseInt(number);
// window.parseInt 등은 엔진이 있는 브라우저 상에서만 실행된다 
console.log('number = ', number, typeof number); // number = 123.4567 string
console.log('intNumber = ', intNumber, typeof intNumber); // 123 number
console.log('intNumber2 = ', intNumber2, typeof intNumber); // 123 number


// URI 주소 인코딩, 디코딩
let uri = 'http://www.naver.com?name=홍길동';
let encodeUri = encodeURI(uri);
let decodeUri = decodeURI(encodeUri);

console.log(uri); // http://www.naver.com?name=홍길동
console.log(encodeUri); // http://www.naver.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99
console.log(decodeUri); // http://www.naver.com?name=홍길동

