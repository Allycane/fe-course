/**
 * Rest Parameter(나머지 인자) : 파라미터 인자를 배열로 저장함
 * - 함수의 매개변수에 정의함
 * - function 함수명(...Rest Parameter);
 * - const 함수명 = (...Rest Parameter) => {};
 */
function add(a, b, ...numbers) {
    // a, b는 원시 데이터, numbers는 배열 객체
    // let sum = numbers.reduce((acc, cur) => {return acc + cur});
    // console.log(a, b, numbers, sum);
    // return a + b + sum;
    return a + b + numbers.reduce((acc, cur) => {return acc + cur});
}



add ( 1, 2, 3, 4, 5, 100, 36); 
// 결과값 : 1 2 [ 3, 4, 5, 100, 36 ] numbers가 배열 객체로 묶였다는 것을 보여줌

let result1 = add ( 1, 2, 3, 4, 5, 100, 36);
console.log(result1); 


const fadd = (f1, ...fruits) => { // ...fruits는 Rest Parameter
    console.log(f1, fruits);
}
let fruits = ['🍎', '🥝', '🥑', '🥥'];
fadd('🍋', fruits); // 🍋 [ [ '🍎', '🥝', '🥑', '🥥' ] ]
fadd('🍋', ...fruits);  // 🍋 [ '🍎', '🥝', '🥑', '🥥' ]
// ...fruits는 Spread Operator


const fObj = (f1, ...fruits) => { // ...fruits는 Rest Parameter
    console.log(f1, fruits);
    return {f1, ...fruits};
    // 배열로 return할 경우
    // return [f1, ...fruits] - 여기서 사용된 ... 도 spread operator
}
let fObjList = fObj('🍋', ...fruits);
console.log(fObjList); 
/** Object Literal은 Property : Value 이기 떄문에 
 * 결과값이 { '0': '🍎', '1': '🥝', '2': '🥑', '3': '🥥', f1: '🍋' }와 같이 출력된다*/