/**
 * 객체에 값을 추가하는 함수 정의
 * 모든 객체에서 사용할 수 있도록 일반화
 * 
 */
import { setValue, getValue, updateValue, deleteValue } from "../commons/object.js";
// import { 함수명 } from "경로.확장자";

const hong = {
    'name' : '홍길동',
    'age' : 30
};

const apple = {
    'name' : 'apple',
}

console.log(hong);

// 1. property, value 추가
setValue(hong, 'address', '서울시 강남구');
setValue(hong, 'job', 'Software Engineer')
setValue(apple, 'emoji', '🍎');

// 2. property, value 가져오기
let hong_name = getValue(hong, 'name');
console.log(hong_name);

// 3. property 값 업데이트
updateValue(apple, 'emoji', '🍏');
console.log(getValue(apple, 'emoji'));

// 4. 객체 값 삭제
deleteValue(hong, 'address');
console.log(hong);
console.log(apple);