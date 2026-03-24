/**
 * 객체 생성 모듈
 */
let objects = {};

export function getObjects() { // 전체 리스트
    return objects;
}

export function createObject(objectName) { // 객체 생성
    return objects[objectName] = {};
}

export function deleteObject(objectName) { // 객체 삭제
    delete objects[objectName];
}

export function getObject(objectName) { // objectName의 주소값을 공유
    return objects[objectName];
}

export function setObject(key, value) {
    objects[key] = value;
}

/**
 * 객체 CRUD 관리 모듈
 */

// 1. 객체에 값을 추가하는 함수 정의, 모든 객체에서 사용 가능 C (Create)
export function setValue(objName, key, value) {
    objName[key] = value;
}

// 2. 객체 값 출력 R (Read)
export function getValue(objName, key) {
    return objName[key];
}

// 3. 객체 값 변경 U (Update)
export function updateValue(objName, key, newValue) {
    objName[key] = newValue;
}

// 4. 객체 값 삭제 D (Delete)
export function deleteValue(objName, deletekey) {
    delete objName[deletekey];
}

// 데이터를 관리하는 CRUD 프로그램


// 생성자 함수를 이용한 객체 CRUD
export function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;

    // this.display = () => {
    //     console.log(this.name, this.emoji);
    // }
}