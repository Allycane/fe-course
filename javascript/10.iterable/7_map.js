/**
 * Map : key, value를 한쌍의 데이터로 가지는 객체
 * - set(key, value) : 데이터를 추가할 떄 사용한다
 * - get(key) : 데이터를 반환
 * - has(key) : 데이터 체크 true / false
 * - delete(key) : 데이터 삭제
 */

let fruitsMap = new Map(); // class 호출 : new
console.log(fruitsMap, typeof fruitsMap);
/* Map(0) {} object
Map(0) : 들어간 데이터가 없음
{} : Key와 Value가 들어가는 것을 의미 - Object Literal
*/

fruitsMap.set('lemon', '🍋');
fruitsMap.set('avocado', '🥑')
fruitsMap.set('peach', '🥥')
console.log(fruitsMap, typeof fruitsMap);
// Map(3) { 'lemon' => '🍋', 'avocado' => '🥑', 'peach' => '🥥' } object


// 데이터 꺼내오기
console.log(fruitsMap.get('lemon'));
console.log(fruitsMap.get('avocado'));
console.log(fruitsMap.get('peach'));


// 데이터 체크
console.log(fruitsMap.has('avocado')); // true
console.log(fruitsMap.has('apple')); // false
// if / else로 사용이 가능
/* if (fruitsMap.has('apple')) {
    console.log(fruitsMap.get('apple'));
}
else {
    console.log('준비 중 입니다');
}*/

(fruitsMap.has('apple')) ? console.log(fruitsMap.get('apple')) : console.log('준비 중 입니다');

// true는 빨간사과, false는 초록사과로 반환
let emoji = (fruitsMap.has('apple')) ? '🍎' : '🍏';
console.log(emoji);


// 데이터 업데이트 시, set()
// 데이터가 없을 때 새로 추가, 데이터가 있을 때 업데이트
fruitsMap.set('apple', '🍏');
console.clear();
console.log(fruitsMap);


// 삭제 delete(key)
// 데이터가 없으면 추가, 데이터가 있으면 삭제
console.clear();
// 오렌지 삭제
if (fruitsMap.has('orange')) {
    fruitsMap.delete = (orange);
}
else {
    fruitsMap.set('orange', '🍊');
}

// entries
let fruitsArray = fruitsMap.entries();
console.log(fruitsArray);