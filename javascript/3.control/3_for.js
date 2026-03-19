/**
 * 제어문 : 반복 처리 - 반복문
 * - for : 반복해야 하는 구체적인 반복 횟수를 알고 있을 때
 * - while : 종료되는 시점을 알고 있는 경우
 * 
 * for( 1️⃣초기값 ; 2️⃣조건절(boolean) ; 4️⃣증가값 ) {
 *      3️⃣실행문;
 * }
 * - for문이 실행되는 순서 : 1 > [ 2 > 3 > 4 ] > [ 2 > 3 > 4 ] > [ 2...조건이 false 값이 도출되면 블록 탈출
 * - 초기값 선언 시 키워드는 반드시 let으로 정의
 */

// 1부터 10까지 콘솔에 출력
// 초기값 : for 블록에서 사용되는 변수
// 조건절(boolean) : 10보다 작거나 같을 때까지 계속 반복, 결과는 true/false
// 실행문 : 2번의 조건절 결과가 true일 때 실행
// 증가값 : 단항 연상자 (++, -- 또는 대입연산자 이용하여 1씩 증가)
for (let i=1; i <= 10; i++ ) {
    console.log(`i = ${i}`);
}

// 숫자 배열을 생성하고 내용을 출력
// 배열의 index는 0으로 시작하기 때문에 j의 값은 0으로 시작
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let j=0; j < numbers.length; j++) {
    console.log(`numbers[${j}] = ${numbers[j]}`);
}
// 반복문을 활용하면 효율적으로 유지보수가 가능하다


// 과일이 레몬이면 이모지 출력
let fruits = ['watermelon', 'melon', 'orange', 'lemon', 'banana', 'pineapple'];
let emojis = ['🍉', '🍈', '🍊', '🍋', '🍌', '🍍'];

for (let k=0; k < fruits.length; k++) {
    if (fruits[k] == 'lemon') {
        console.log(fruits[k], emojis[k]);
        // break; // 조건을 만족했을 때 for문을 강제적으로 종료시키는 방법 1
        // k = fruits.length; // 조건을 만족했을 때 for문을 강제적으로 종료시키는 방법 2
    }
    // console.log(k);
}
