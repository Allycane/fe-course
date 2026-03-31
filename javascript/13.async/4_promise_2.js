/**
 * async / await
 * - 비동기식 로직의 순차적인 순서를 보장하는 키워드
 * - async는 await를 포함한 함수 앞에 붙인다
 * - await는 실행되는 비동기 객체 앞에 붙인다
 */


async function promiseTest() {
    let dataArray = null; // 초기값 null, Heap에 객체도 만들어지지 않은 상태 : 주소도 없음

    // Promise 객체 생성
    let promise1 = new Promise((resolve, reject) => {
        let numbers = [1, 2, 3, 4, 5];
        resolve(numbers);
    }); // 비동기로 동작하는 변수를 만들겠다
    // resolve ( 성공 ) 처리 되면 numbers 배열을 출력한다

    await promise1.then((result) => dataArray = result)
            .catch((error) => console.log('error = ', error));

    console.log('dataArray = ', dataArray);
    // promise1이 먼저 실행하도록 해야 dataArray에 값이 들어간다
    // 비동기를 포함하고 있는 로직을 순차적으로 실행하도록 한다

    // await 무조건 1번으로 실행하도록 명령하는 키워드
    // function 앞에 async를 추가 = await를 포함하고 있는 함수라는 것을 보여줌
}

promiseTest();