/**
 * while - 반복 횟수는 알 수 없지만 종료해야 하는 시점을 알고 있는 경우에 사용하는 반복문
 * 
 * 초기값 - while문 바깥에 초기값을 선언
 * while( 조건식 ) {
 *      설명문;
 *      증가값;
 * }
 * 
 */
// 1~10까지 출력
// 7까지 출력 후 종료
let number = 1;
while ( number <= 10 ){
    console.log(number);
    if ( number == 7 ) break;
    number++;
}
// 10까지 라는 횟수를 알고 있기 때문에 for문을 활용하는 것이 더 효율적

// 메뉴 선택
// 메뉴 1번 : 피자, 메뉴 2번 : 핫도그, 메뉴 3번 : 햄버거
let flag = true; // 하나를 선택해야 하는 과정이기 때문에 초기값을 넣지 않고 true값을 넣어 계속 반복하도록 활성화
let menu = 1;
while (flag) {
    console.log(`메뉴 1번 : 피자, 메뉴 2번 : 핫도그, 메뉴 3번 : 햄버거`);
    
    if ( menu == 1 ){
        console.log(`🍕`);
        flag = false;
    }

    else if ( menu == 2) {
        console.log(`🌭`);
        flag = false;
    }

    else if ( menu == 3 ){
        console.log(`🍔`);
        flag = false; // true 값을 선택하였을 경우 false로 변경하여 반복문 종료
    }

    else {
        console.log(`메뉴 준비중~ 다른 메뉴를 선택해주세요!`);
        flag = false;
    }
}
