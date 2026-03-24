/**
 * JSON의 기본은 Object ( 객체 )
 * 
 * object :
 * - {}, 다양한 데이터 타입을 저장
 * - object literal 타입, { property ( key ) : value }
 * - JSON : ( JavaScript Object Notation )에서는 property (key)를 반드시 문자열로 정의한다
 * 
 */

// 학생의 성적을 관리하는 객체 생성 Object Literal 사용
    // 일반적으로 객체를 생성할 떄는 let 보다는 const를 정의
const hong = {
    'name' : '홍길동',
    'age' : 30
};
console.log(hong.name);
console.log(hong.age);

// 1. property를 통한 value 값 수정
hong.name = '홍길순';
hong.age = 25;

console.log(`hong = ${hong}`); 
// 백틱연산자로 출력을 진행하면 값만 가져오게 됨 | 출력값 : hong = [object Object]
console.log(hong);
// 외부에서 접근할때는 . 으로 접근해야만 함

// 2. property를 통한 값 삭제
delete hong.name;
console.log();
console.log(hong);

