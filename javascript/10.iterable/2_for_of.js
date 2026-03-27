/**
 * 배열의 요소를 치환하는 함수 생성
 */
function replace(array, origin, target) {
    // array의 복사본을 생성 shallow copy 진행 - 원본 유지
    let arrayCopy = Array.from(array)

    let idx = 0;
    for (const item of arrayCopy) {
        if ( item == origin ) {
            arrayCopy.splice(idx, 1, target);
        }
        idx++; // i++을 진행하는 이유?
    }
    return arrayCopy;
}

function replaceObj(array, origin, target) {
    let arrayCopy = Array.from(array)

    let idx = 0;
    for (const item of arrayCopy) {
        if ( item.emoji === origin ) {
            arrayCopy.splice(idx, 1, {name: item.name, emoji: target});
        }
        idx++; // i++을 진행하는 이유?
    }
    return arrayCopy;
}

function replace1(array, origin, target) {
    let arrayCopy = Array.from(array)
    arrayCopy.forEach((item, idx) => {
        if (item === origin) arrayCopy.splice(idx, 1, target)
    });
    
    return arrayCopy;
}

function replace2(array, origin, target) {
    // 새로운 객체를 생성하기 때문에 shallow copy를 할 필요가 없음
    return array.map( (item) => ( item === origin ) ? item = target : item ); // 삼항연산자
}


let fruits = ['🥑', '🍎', '🥥', '🥝', '🍉'];

let fruitsObj = [
    {name: 'avocado', emoji: '🥑'},
    {name: 'apple', emoji: '🍎'}
];

let obj1 = replace(fruits, '🍎', '🍏'); // for.. of
let obj2 = replaceObj(fruitsObj, '🍎', '🍏');
let obj1_1 = replace1(fruits, '🍎', '🍏'); // forEach
let obj1_2 = replace2(fruits, '🍎', '🍏'); // forEach

console.log(fruits); // [ '🥑', '🍎', '🥥', '🥝', '🍉' ]
console.log(obj1); // [ '🥑', '🍏', '🥥', '🥝', '🍉' ]
console.log(obj2); 
console.clear();
console.log(obj1_1);
console.log(obj1_2);

