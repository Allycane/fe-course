/**
 * 동기식 (sync) vs 비동기식 (async)
 * (1) 동기식 
 * - 순차적으로 한 번에 하나씩 작업 실행 - Single Thread 기반이기 때문
 * - 코드 실행 > Call Stack > 바로 처리
 * 
 * (2) 비동기식
 * - 대량의 작업을 모아서 나중에 처리 => Call Stack이 비어있는 상태에 처리한다
 * - 코드 실행 > Call Stack > WebAPI ( Chrome ) / Background (NodeJS) 영역에 저장 
 *      > Task Queue 순차적으로 이동 및 저장 > Call Stack이 비어있으면...
 *      > Event Loop 객체가 Task Queue에 있는 작업들을 Call Stack으로 보내어 처리한다
 *      > Call Stack 작업 처리 후 종료
 * - setTimeout(), fetch(), axios(), DB 연동, 파일 I/O, ...
 * 
 */

function a() {
    b(); // Return Address
    setTimeout(() => {return console.log(`Task Queue에 바로 저장됨!!`)}); // callback 함수가 들어가야 함
    console.log(`----------------> A <----------------`);
}

function b() {
    setTimeout(() => {return console.log(`Task Queue에 1초 후에 저장됨!!`)}, 1000);
    console.log(`----------------> B <----------------`);
}

function c() {
    a();    // 함수를 호출하러 가서 다시 돌아오는 것 Return Address(복귀주소), Return Address는 Call Stack에 저장
    console.log(`----------------> C <----------------`);
}

c();

/*
----------------> B <----------------
----------------> A <----------------
----------------> C <----------------
Task Queue에 바로 저장됨!!
Task Queue에 1초 후에 저장됨!! // 1초 뒤에 출력됨
*/
