/**
 * Destructure Object - 구조 분해 할당
 * - 객체의 구조를 분해하여 변수에 "자동으로" 할당
 */
// 1. 배열
let numbers = [1, 2, 3, 4, 5];
/*
let aa = numbers[0];
let bb = numbers[1];
*/

let [a, b, ...nlist] = numbers; // numbers는 배열이기 때문에 배열로 분해한다
// ...nlist는 Rest Parameter가 된다
console.log(a, b, ...nlist);
console.clear();


// 2. 오브젝트 리터럴
let hong = {
    name : '홍길동',
    age : 30,
    job : '개발자'
}
// let name = hong.name;
// let age = hong.age;
// let job = hong.job;
let {name, age, job} = hong; // hong은 객체이기 때문에 객체로 분해한다
console.log(name, age, job);
console.clear();


// 오브젝트 리터럴을 반환하는 함수
const creatObj = () => {
    return {
        aname: 'avocado',
        acolor: 'green',
        aemoji: '🥑'
    };
}

// let {f1, f2, f3} = createObj(); - 정상적으로 값이 출력되지 않음 : 데이터를 가져올 수 없음
let {aname, acolor, aemoji} = creatObj();
/* 함수 내에서 return된 key값과 구조분해 할당를 하고자 하는 key는 이름이 같아야 함
구조분해 할당은 변수의 순서는 상관이 없다 */

let price = 1000;
let source = '강원도';
/* let {aname, acolor, aemoji, price=1000, source='강원도'} = creatObj();
이러한 방법으로 변수와 값을 추가하는 것도 가능하다*/


// console.log(f1, f2, f3); - 출력 실패
console.log(aname, acolor, aemoji);
console.log(aname, acolor, aemoji, price, source);