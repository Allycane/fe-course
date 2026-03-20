// 1 ~ 5까지 출력
for (let i = 1; i <= 5; i++) {
    console.log(i); 
    // j에서 에러 발생, j가 선언된 블록은 이미 생명주기가 끝난 상태이고,
    // 자신의 블록 내에도 j 라는 변수가 존재하지 않으며, 전역에도 선언된 j 라는 변수가 존재하지 않기 떄문에 에러가 발생한다.
    for (let j = 10; j < 60; j*=10) {
        console.log(i);
        
    }
}

// fruits 배열 요소 출력
let fruits = ['🍏', '🍋', '🍊'];
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
    
}