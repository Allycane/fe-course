/**
 * JavaScript는 두가지의 Data Type이 있다
 * - Primitive Data Type ( 원시형 데이터 타입 )
 *  - 정수형 ( Integer ) : 100, 200... (x64비트 기준 : -2**31 ~ 2**31-1)
 *  - 실수형 ( Float, Double ) : 3.14.. 소수
 *  - 문자형 ( Character (= string) : '', "" ) : '한글', "English" ...
 *  - 불린형 ( Boolean ) : true(1) / false(0)
 * 
 * (x64비트 기준 : -2**31 ~ 2**31-1) 영역 내의 숫자를 사용하게 되면 Stack Frame에 저장이 된다
 * (x64비트 기준 : -2**31 ~ 2**31-1) 영역 밖의 큰 숫자를 사용하게 되면 Heap에 저장이 된다
 * 실수형, 문자형도 Heap으로 저장이 되고, 포인터(변수)는 Stack Frame에 선언
 * 
 * - Reference Data Type ( 참조형 데이터 타입 )
 *  - 객체형 ( Object, {} ), 배열 ( Array [] ), 클래스 ( Class ), JSON ( 객체형, 배열 모두 포함 )
 * 
 * 참조형 데이터 타입은 '무조건' Heap 에 저장이 된다.
 */

// let obj = {'name':'홍길동', 'age' = '100'};
// 여러가지가 묶여있어 하나의 기계어로 변환할 수 없기 때문에 참조형 데이터 타입으로 저장된다.

//1. 정수형
let inumber1 = 2**31-1;
let inumber2 = 2**31;
console.log(inumber1, inumber2);

//2. 실수형
let fnumber = 1234.12345678;
console.log(fnumber);

//3. 문자형
let name = '홍길동';
let cname = '홍길동';
console.log(name);
console.log(cname);
// Sequence String 에 저장된 문자열 데이터에 같은 내용이 포함되어 있다면 새로 저장되지 않고 복사하여 출력한다.
// name과 cname이 같은 주소를 사용하는 것이 된다.

//4. 불린형
let flag = true;
console.log(flag);

//5. 배열
let nameArray = ['홍길동', '이순신', '김유신'];
console.log(nameArray);

//6. 객체형
let obj = {
    "name" : '홍길동',
    "age" : 30
};
console.log(obj);

//7. JSON
let jsonObj = {
    "name": '홍길동',
    "score": [100, 90, 90]
};
console.log(jsonObj);

//8. 초기화 값, 또는 객체
let x = undefined; // 저장공간은 만들어지지만 값을 할당하지 않았을 경우, undefined - Primitive Data Type의 초기화
let xy = null; // null - Reference Data Type의 초기화
// 하지만 JavaScript는 정형화 되지 않았기 때문에 undefined로 정의되어 있어도 참조형 데이터를 넣어도 에러는 발생하지 않는다. 

//9. typeof : 데이터 비교
let xx = 10;
let xxx = 10;
let yy = '10';
let oo = {'name': 'object'};

// console.log('데이터 타입 확인 : typeof');
console.log(xx, typeof xx);
console.log(yy, typeof yy);
console.log(oo, typeof oo);
// console.log('데이터 타입 확인 및 비교' );
console.log(typeof xx == typeof xxx); // == 변수에 들어간 값만 비교
console.log(typeof yy == typeof xxx); // == 변수에 들어간 값과 데이터타입을 비교
console.log(yy === xxx); // === 등호를 세개를 입력하면 typeof를 입력하지 않아도 데이터타입까지 비교를 진행한다
console.log(yy == xxx); // 데이터 타입과는 관계없이 값이 같아서 true가 출력된다



