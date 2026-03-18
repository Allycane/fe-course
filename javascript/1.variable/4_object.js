/**
 * 참조 데이터 타입 : 객체( Object )
 * - Array ( 배열 ) : [데이터, 데이터...];
 * - Object ( 객체 ) : {'프로퍼티': 데이터, '프로퍼티': 데이터...};
 */

let apple = null;
apple = {
    'name': 'Apple',
    'color': 'Red',
    'emoji': '🤔'
    // name: 'Apple',
    // color: 'Red',
    // emoji: '🤔' Node로 실행할 때는 ''로 묶어주지 않아도 된다.
    // 하지만 다른 환경에서는 정상적으로 실행되지 않아서 규칙을 지켜주는 것이 좋다.
};
console.log(typeof apple);
console.log(apple);
console.log(apple.name); // apple 내의 name 이라는 속성값만을 출력하고 싶을 때 '.'
console.log(apple.color); 
console.log(apple.emoji);

// 오렌지 객체를 생성 후 타입, 객체, name, color, price, emoji를 각각 출력
let orange = null;
orange = {
    'name': '오렌지',
    'color': 'Orange',
    'price': 10000,
    'emoji': '🥮'
};
console.log(typeof orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.price);
console.log(orange.emoji);


let fruitList = null;
// fruitList = ['apple', '🤔', 100, 200, true];
// console.log(fruitList);

// 다양한 데이터 타입을 저장할 수 있지만 권장되지는 않는다. 
// 동일한 데이터 타입과 공통적인 속성들을 선언해서 사용하는 것이 좋다
fruitList = ['🤔', '🥮', '❤', '❌'];
console.log(fruitList);
console.log(fruitList[0]); //전체 길이는 Index + 1
console.log('thinking', fruitList[0]); 
console.log(fruitList.length); // 배열의 길이가 얼마인지를 출력함
console.log(fruitList[fruitList.length-1]); // 배열의 가장 마지막에 있는 객체를 출력함


// 객체 타입을 요소로 하는 배열 생성
let fruitlistObj = null;
fruitlistObj = [apple, orange]; // 위에 선언된 apple 객체와 orange 객체
console.log(fruitlistObj[0].name); // fruitlistObj가 가지고 있는 객체의 데이터를 호출하여 출력
console.log(fruitlistObj[1].price);
