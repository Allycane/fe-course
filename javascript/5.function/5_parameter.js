/**
 * 함수 호출 -> 파라미터 ( 인자, 입력되는 값 ) -> 함수의 변수(지역)에 자동 매핑
 * **레스트 파라미터 ( Rest Parameter ): '...'의 기호를 파라미터에 입력
 *                                  레스트 파라미터로 입력되는 인자는 배열에 자동 저장
 */

console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

// function add (n1, n2) { // 매개변수, 지역변수
//     return n1 + n2;
// }

// function add (n1, n2, n3) {
//     return n1 + n2 + n3;
// }

// function add (n1, n2, n3, n4) {
//     return n1 + n2 + n3 + n4;
// }

function add(... args) { // 파라미터를 args라는 배열 객체로 변수 지정
    // 배열의 합을 구하여 반환
    // let sum = 0; // 반복되는 구문 밖에서 변수 선언
    // for (i=0; i < args.length; i++) {
    //     sum += args[1];
    // }   

    // 배열.reduce() - 배열 객체가 누적합을 구하는 경우 for문 대신 사용이 가능하다
    let sum = args.reduce((sum, currentValue) => sum + currentValue, 0);
    return sum;
    
}

// Non-access Number
// 함수의 이름이 겹치게 되면 마지막에 적힌 함수가 출력된다
// 파라미터 갯수와 맞지 않을 경우, undefined로 처리되어 숫자가 아닌 NaN으로 출력된다 ( 에러 X )
// undefined 처리된 위치에 값을 입력하면 정상적으로 출력된다.


let obj = add2 ('홍길동', 20, 1, 2, 3, 4, 5);
console.log(obj.name);
console.log(obj.age);
console.log(obj.score);


function add2 (name, age, ...args){
    // let sum = 0;
    // for (i=0; i<args.length; i++){
    //     sum += args[i];
    // }

    //배열.reduce()를 사용할 경우
    let sum = args.reduce((acc, cur) => acc + cur, 0);

    return {
        name: name,
        age : age,
        score: sum
    }
};
// 다양한 데이터 타입으로 구성된 배열에 파라미터를 지정하여 원하는 값으로 호출이 가능