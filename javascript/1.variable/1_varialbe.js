/**
* ES6 기준의 문법 형식 적용
* 변수 : 데이터를 V8엔진의 Call Stack 메모리에 저장하는 공간
* 변수를 선언하는 키워드 : var ( ES6 기준에서는 사용하지 않음 ) / let / const ( 상수 - 값을 바꿀 수 없는 상태 )
* var를 사용하여 진행하는 경우, 중복된 변수가 사용될 수 있으므로 권장하지 않음
* let : 변수 선언, 데이터 수정 가능
* const : 상수 선언, 선언한 데이터 수정 불가능

* 문법 : [변수선언 키워드] 변수명 = 데이터;

* JavaScript 상에서는 let이나 const를 붙여 정확한 변수 선언을 해야 함
* 변수 선언을 해주지 않게 되면 자동으로 var 를 적용하게 됨
*/

// let number = 100; 
// number = "hello";
// number = 200;
// console.log(number);

// const number2 = 100;
// number2 = "hello";
// console.log(number2);

let name = "홍길동";
let name2 = '홍길동';
console.log ('name =', name,',','name2 =', name2);

// number 변수에 정수 100을 저장
let number = 100;
console.log('number =', number);

// flag 변수에 true 값 지정
let flag = true;
console.log(flag);

// cname 변수에 상수로 '이순신'
const cname = "이순신"
console.log(cname);