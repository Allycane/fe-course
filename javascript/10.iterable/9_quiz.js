/**
 * 중복된 배열 객체를 입력받아, 중복을 제거한 후 출력하는 함수 생성
 */
function filter(array) {
    return new Set(array);
}

let numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
console.log(numbers);
console.log(filter(['홍길동', '이순신', '스미스', '홍길동']));
// 결과값 : Set(3) { '홍길동', '이순신', '스미스' }

let mySet = new Set();
mySet.add(100);
mySet.add('홍길동');

let myArray = new Array(mySet);
console.log(myArray);
// 결과값 : [ Set(2) { 100, '홍길동' } ]
// myArray는 mySet의 요소값을 출력한 것이 아닌, mySet의 주소값을 받아오게 됨


// 구조분해 할당
const getObject1 = () => {
    return {
        name: '홍길동',
        age: 30,
        job: '개발자',
        address: '서울시'
    };
}

const getObject2 = () => {
     return [1, 2, 3, 4, 5];
}

let {name, address} = getObject1();
let [a, b, ...nList] = getObject2();
console.clear();
console.log(name, address);
console.log(a, b, ...nList);


// textList를 입력받아, 3글자 이상의 text이면 새로운 배열 생성
// 함수 생성
const textFilter = (textList) => {
    return textList.filter((text) => { return text.length >= 3});
}

const textFilter2 = (textList) => {
    return textList.filter(text => !(text.length >= 3));
}

let result = textFilter(['JavaScript', 'React', 'HTML', 'CSS', 'a', 'ab']);
let result2 = textFilter2(['JavaScript', 'React', 'HTML', 'CSS', 'a', 'ab']);
console.log(result);
console.log(result2);
