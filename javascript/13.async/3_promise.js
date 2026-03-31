/**
 * 비동기 로직(미래의 작업)을 구현하는 객체 - 작업을 처리하고 반드시 결과를 반환하겠다는 약속
 * - resolve : 비동기 작업 성공 시 반환
 * - reject : 비동기 작업 실패 시 반환
 * - Promise 객체 생성
 *    예) const / let PromiseObject = new Promise((resolve, reject) => { 비동기식 로직 ( 미래의 작업 ) });
 * - Promise 객체 호출
 *    예) PromiseObject.then(성공 시 callback) / .catch(실패 시 callback);
 */
// Promise 객체 생성
const promise = new Promise((resolve, reject) => {
    // 비동기 로직 ( 미래의 작업 )
    let success = false;
    if (success) {
        resolve('성공!!');
    }
    else {
        reject('실패...');
    }
});

promise.then((result) => {console.log(result)}).catch((error) => {console.log(error)});
// WebAPI에 바로 저장 > Task Queue 이동 


console.log(`---------------프로미스 객체 호출`);
promise.then((result) => {console.log(`result =>`, result);}).catch((error) => {console.log(`error => `, error)});
console.log(`---------------프로그램 종료`)
