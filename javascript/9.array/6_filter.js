/**
 * 배열 객체에서 필터링을 진행한 후 shallow copy를 진행 후 리턴
 * - 배열객체.filter(callback);
 */
let strList = ['hong', 'smith', 'lee', 'james'];
// 이름이 4자 이상인 이름만 필터링
let filterObj = strList.filter((str) => str.length >= 4 );
console.log(filterObj); // 새로 만들어진 배열로 출력
console.log(`filterObj = ${filterObj}`); // 새로 만들어진 배열에 포함된 요소들만 출력
// find는 하나의 값을 출력하지만, filter는 배열 전체를 검색하여 조건에 맞는 다수를 shallow copy 하여 새로운 배열로 return을 진행한다

// fruits 객체에서 name이 lemon 객체를 출력
let fruits = [
    {name: 'apple', emoji: '🍎'},
    {name: 'lemon', emoji: '🍋'},
    {name: 'avocado', emoji: '🥑'}
];
let lemons = fruits.filter((item) => item.name === 'lemon');
// === 을 이용해 값과 데이터 타입을 모두 비교해서 출력해야 함
console.log(lemons);
console.log(`요청하신 과일은 ${lemons[0].name}${lemons[0].emoji} 입니다~`);
/** 
 * console.log(lemons); 에서 출력된 값은 [ { name: 'lemon', emoji: '🍋' } ] = 배열로 반환된다
 * 배열 내의 인덱스 0번째 객체 (요소) 이기 때문에 출력하기 위해서는 lemos[0]. 으로 접근해야 한다
*/

let findLemon = fruits.find((item) => item.name === 'lemon');
console.log(findLemon);
console.log(`요청하신 과일은 ${findLemon.name}${findLemon.emoji} 입니다~`);
/** 
 * find()는 객체로 반환되기 때문에 변수값. 으로 접근이 가능하다
 */



