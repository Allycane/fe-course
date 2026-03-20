/**
 * 반복문을 강제 종료 - 반복문 탈출
 * - break : break를 만나면 반복문 즉시 종료
 * - 조건식 : false가 되는 조건으로 반복문 종료, break보다 한번 더 조건을 체크!!
 */

// 1 ~ 10까지 반복
// i=7 일 때 종료
for (let i=1; i <= 10; i++) {
    console.log(`i = ${i}`);
    if ( i == 7 ) break; // 바로 종료
}
console.log();
// 자연스럽게 종료, i=7이면 false로 만들기
for (let i=1; i <= 10; i++) {
    console.log(`i = ${i}`);
    if ( i == 7 ){
        i = 11;
        // i += 10;
    }
}