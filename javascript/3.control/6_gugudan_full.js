// let mulStart = 13;
// let mulEnd = 28;

// for (let i = 1; i < 10; i++) {
//     let output = '';
//     for (let j = mulStart; j <= mulEnd; j++) {
//         output +=`${j} ✖ ${i} = ${i*j} \t`; // \t 탭키만큼 띄운다
//         //output이 포함되어야만 하는 이유
//     }
//     console.log(output);
// }

/**
 * 반복문 필수 코스 - 삼각형 별찍기
 */
// for (let i = 1; i <= 5; i++) {
//     let output = '';
//     // for (let j = 1; j <= i; j++) {
//     //     output += `*`;
//     // }
//     output += '*'.repeat(i) // 값이 똑같은 패턴으로 반복하는 경우 사용가능한 함수 repeat
//     console.log(output);
// }

/**
 * 삼각형으로 초록색 사과 찍기
 * - 세번째 줄만 빨간색 사과
 */
// for (let i = 1; i <= 5; i++){
//     let output = '';
//     for (let j=1; j<=i; j++){
//         if (i == 3) {
//             // console.log('🍎');
//             output += '🍎';
//         }
//         else{
//             output += '🍏'
//         }
//     }
//     console.log(output);
// }

/**
 * 정삼각형 찍기 - repeat ( 반복횟수 ) 함수 사용
 */
// for (let i = 1; i<=3; i++){
//     output = ' ';
//     output += ' '.repeat(5-i);
//     output += '🍔'.repeat(i)
//     console.log(output);
// }

/**
 * 마름모꼴 - 하단부는 빨간 사과. 상단부는 녹색 사과
 */
let size = 22;
for (let i = 1; i<=size; i++) {
    output = ' ';
    if ( i <= size/2 ) {
        output += ' '.repeat(size-i)
        output += '🍏'.repeat(i)
    }
    else {
        output += ' '.repeat(i)
        output += '🍎'.repeat(size-i)
    }
    console.log(output);
    // 이렇게 작성한 내 코드는 홀수를 입력해야만 균등하게 출력된다는 단점이 있다.
    // 하지만 반대로 중앙부가 한 줄로 연결되는 마름모 꼴로는 이 코드가 더 적절해보임
    // repeat 함수는 JavaScript ES6 이상부터 사용이 가능한 함수이다
}

// let size = 12; 
// for (let i=1; i<=size; i++){
//     let output = '';
//     let space = '';
//     space += ' '.repeat(size-i);
//     output += '🍏'.repeat(i);
//     console.log(space, output);   
// }
// for (let i=size; i>=1; i--){
//     let output = '';
//     let space = '';
//     space += ' '.repeat(size-i);
//     output += '🍎'.repeat(i);
//     console.log(space, output);   
// }