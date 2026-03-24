import { getObjects, createObject, deleteObject, getObject, setValue, getValue, updateValue, deleteValue } from "../commons/object.js";
/* import * as object from "../commons/object.js"; 
// 전체를 가져올 경우 메서드 앞에 object.을 붙여주어야 함 */

// 회원 주소록 생성

// 홍길동, 스미스
let addressBook = getObjects(); // 빈 객체 생성 - "../commons/object.js"의 objects의 주소를 복사 및 공유 ( Shallow Copy )

// 1. 객체 생성
createObject('hong');

// 2. hong 주소 가져오기
let hong = getObject('hong');

// 3. name, age, address 추가
setValue(hong, 'name', '홍길동');
setValue(hong, 'age', 30);
setValue(hong, 'address', '서울시');

// 4. name, age, address 출력
console.log(getValue(hong, 'name'));
console.log(getValue(hong, 'age'));
console.log(getValue(hong, 'address'));

// 5. 주소를 '부산시' 업데이트
updateValue(hong, 'address', '부산시');
console.log(hong);

// 6. 주소를 삭제
deleteValue(hong, 'address');
console.log(hong);

// 7. 객체 삭제
deleteObject('hong');


console.log(addressBook);