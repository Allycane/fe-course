/**
 * try-catch-finally : 자바스크립트에서 예외를 처리하는 구문
 * ~ finally : 예외 발생 상관없이 무조건 출력되는 구문
 * 
 */
// 자바스크립트의 배열은 동적으로 관리됨
let numbers = [1, 2, 3];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);  // 존재하지 않는 3번 인덱스를 엔진에서 추가로 생성하여 undefined 출력

numbers[99] = 1000;
console.log(numbers[99]);
console.log(numbers);

// Number 클래스 생성
let numbers2 = new Number(12345);
try {
    for (const num of number2) {
        console.log(num);
    }
} catch (error) {
    console.log('error---------------->\n', 'error');
    console.error(error);
} finally {
    console.log(`number2 실습 ----------------->`)
}


let number3 = new String('12345');
try {
    for (const num of number3) {
        console.log(num);
    }
} catch (error) {
    console.log('error---------------->\n', 'error');
    console.error(error);
} finally {
    console.log(`number3 실습 ----------------->`)
}

