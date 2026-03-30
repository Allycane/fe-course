/**
 * Set : 다양한 데이터 저장
 * - add() : 데이터 추가
 * - has() : 데이터 체크
 * - delete() : 데이터 삭제
 * - 중복된 데이터는 자동 필터링 되어 하나만 저장
 */

let mySet = new Set();
mySet.add(100);
mySet.add('홍길동');
mySet.add({name:'apple'});
mySet.add([1, 2, 3, 4, 5]);
mySet.add('100'); // 데이터 타입이 들어가기 때문에 값은 같아도 Set.add()가 진행됨
mySet.add(100); // 중복된 데이터값은 자동 필터링 되어 Set.add()가 진행되지 않음
console.log(mySet);
console.clear();

// 데이터를 출력
for ( const item of mySet ) {
    console.log(item);
}
console.log('---------홍길동 검색')
if (mySet.has('홍길동')){
    for ( const item of mySet ){
        if (item === '홍길동') {
            console.log(item);
        }
    }
}
console.log('---------홍길동 검색')

// 데이터 삭제
if (mySet.has('홍길동')){
    mySet.delete('홍길동');
}
console.log(mySet);


// 모든 요소 삭제
mySet.clear();
console.log(mySet);