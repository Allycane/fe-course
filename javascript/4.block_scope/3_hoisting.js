/**
 * 호이스팅 (Hoisting) - 파일이 호출되면 실행 전 function 키워드의 함수들을 객체로 미리
 *                     메모리에 생성하는 작업
 * 
 */
//test1, test2 함수는 호이스팅 되므로 호출 시 정상 실행
test1();
test2();

function test1() {
    console.log(`----->호이스팅 1<------`);
    
}
function test2() {
    console.log(`----->호이스팅 2<------`);
    
}

// ES6 기준의 키워드 let, const로 정의된 함수는 호이스팅 불가능
// 반드시 함수 선언 후에 호출되어야 함

const test3 = () => {
    console.log(`----->테스트 3<-----`);
    
}

test3();

let test4 = function() {
    console.log(`----->테스트 4<-----`);
}

test3();
test4();

// arrow 방식은 메모리에 저장이 되어있어야 호출이 가능하다
// test3(); //ReferenceError - 호이스팅 불가
// test3(); //ReferenceError - 호이스팅 불가