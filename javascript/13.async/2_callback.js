/**
 * callback - 함수의 인자에 입력되는 함수로직 ( Anonymous Function : 무기명 함수 )
 * - setTimeout(callback, delay)
 */
function runDelay(callback, delay) {
    setTimeout(callback, delay);
}

runDelay(() => {console.log(`3초 후에 Task Queue에 저장!`)}, 3000); 
// 3초 후에 Task Queue에 저장, Event Loop에 의해 Call Stack이 callback 함수를 실행된다


runDelay(function() {console.log(`Task Queue에 바로 저장!`)}); 
// Task Queue에 바로 저장, 콜스택이 callback 함수 실행

runDelay(() => {console.log(`1초 후에 Task Queue에 저장!`)}, 1000); 
// 1초 후에 Task Queue에 저장, Event Loop에 의해 Call Stack이 callback 함수를 실행된다

console.log(`------------프로그램 종료----------`);
// 가장 먼저 출력되게 됨 - 동기식이기 때문
