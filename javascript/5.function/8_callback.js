/**
 * callback 함수 - 함수의 파라미터에 입력되는 익명함수 ( Anonymous )
 */

const job = (a, b, callback) => {
    // console.log(a, b);
    callback(a, b);
}
// callback을 파라미터 내에 입력하면 해당 함수 내에서만 사용이 가능하다

const print = (a, b) => {
    console.log(a, b);
}

const printSum = (a, b) => {
    console.log(a + b);
}

// job(1, 2, ()={});
job(1, 2, (a, b) => {console.log(a, b)});
job(10, 20, (a, b) => (console.log(a + b)));
// callback 함수는 다른 위치에서 호출할 수 없다
job(10, 20, print);
job(10, 20, printSum);

console.clear();
console.log(`Console에 로그 출력 #1`);
// 비동기식 처리 함수 : setTimeout(functionRef(callback), delay);
// 내장함수, 전역함수 - 이름만 안다면 언제든지 호출이 가능하다
setTimeout(() => {
    console.log(`setTimeout 실행 결과!!`);
}, 1000); 
// 1000 = 1s, 1초 후에 입력한 콜백 함수를 실행 - 나중에 처리 : 비동기식 처리 함수

console.log(`Console에 로그 출력 #2`);



