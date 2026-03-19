/**
 * 제어문 : 조건 분기
 * 단일 if(조건절),
 * if(조건절) .. else,
 * if(조건절) .. else if(조건절1) .. else if(조건절2) .. else(조건절3)..
 * 
 * 삼항 연산자 : (조건절) ? statement1 : statement2;
 */

// 입력되는 과일 이름이 'apple'인 경우에만 이모지 출력
let fname = undefined;
fname = 'apple';
if ( fname == 'apple' ){
    console.log('🤔');
}
// 단일 if문 내의 조건이 충족한다면 해당 값을 출력, 조건이 충족되지 않는다면 아무것도 출력하지 않음
console.log();

// 입력되는 과일 이름이 'apple'인 경우에만 이모지 출력
// 'apple'이 아닌 경우 과일이름을 출력
let fname1 = undefined;
fname1 = 'orange';
if ( fname1 == 'apple' ){
    console.log('🤔');
}
else {
    console.log(fname1);
}

// 삼항 연산자로 변환
let result = (fname1 == 'apple') ? '🤔' : fname1;
console.log('과일 이모지 : ', result);
console.log();
// 다중 조건절
// 선택한 메뉴를 출력
let menus = ['Pizza', 'Hotdog', 'Coffee'];
if (menus[0] == 'Pizza') {
    console.log('🍕');
    
}
else if (menus[1] == 'Hotdog') {
    console.log('🌭');
    
}
else if (menus[2] == 'Coffee') {
    console.log('🍿');
    
}
else {
    console.log('메뉴를 선택해 주세요.');
    
}
// 조건이 달성되면 결과를 출력하고 if문을 빠져나온다
// 조건이 달성되지 못했다면 다음 else if문으로 넘어간다
// 최종적으로 모든 조건을 달성하지 못했다면 else문 내용을 출력한다


// 입력받은 숫자가 홀수이면 사과, 짝수이면 오렌지 출력
let number = undefined;
number = 124;
let fresult = undefined;
if ( number % 2 == 1 ) {
    // console.log('apple');
    fresult = 'apple';
}
else {
    // console.log('orange');
    fresult = 'orange';
}
console.log(`실행결과 : ${fresult}`); // 백틱 연산자



// JavaScript 내에서는 number % 2에 대한 == 1의 값을 주지 않더라도 결과값이 출력이 된다

// 조건식의 결과가 0, 1 이면 boolean 타입으로 자동 변환 
/*
let number = undefined;
number = 124;
if (!(number % 2)) {
    console.log('apple');
}
else {
    console.log('orange');
}
*/
let fresult1 = (!(number%2)) ? 'apple' : 'orange';
// (!(number&2)) ? fresult1 = 'apple' : fresult : 'orange';
console.log('결과 = ', fresult1);
