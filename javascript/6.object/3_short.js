/**
 * 변수를 객체의 값으로 정의하는 경우, property 생략이 가능하다
 */

let name = '홍길동';
let age = 30;
let address = '서울시 강남구';

let person = {
    // name : name,
    // age : age
    name, age, address
};
console.log(person);


// 두 개의 값을 입력받아, 객체로 리턴하는 함수 생성
function createObj(x, y) {  
    return { x, y };
}

const createObjArrow = (x, y) => {
    return {x, y};
}

let number1 = createObj(1, 2);
let number2 = createObjArrow(1, 2);
console.log(number1);
console.log(number2);


// 사원의 이름, 나이, 주소, 소속부서 정보를 입력받아, 사원객체를 생성하고 반환하는 함수를 정의
// createEmployee, arrow function 사용
const createEmployee = (name, age, address, department) => {
    return {name, age, address, department};
}

// let emp1 = createEmployee('홍길동', 30, '서울시 강남구', '개발팀');
// let emp2 = createEmployee('Smith', 35, '부산시 해운대구', '영업부');
// console.clear();
// console.log(emp1);
// console.log(emp2);

let empList = [
    ['홍길동', '30', '서울시', '개발부'],
    ['Smith', '34', '부산시', '영업부'],
    ['이순신', '40', '인천시', 'HR'],
];

/* 데이터 출력
for(let i = 0; i < empList.length; i++){ // 행
    let rows = '';
    for(let j = 0; j < empList[i].length; j++ ) { // 열
        rows += empList[i][j] + '\t';
    }
    console.log(rows);
}
 */

// 행과 열을 가진 2차원 배열에 대한 공부가 필요할 듯

for(let i = 0; i < empList.length; i++){
    let object = {};
    for(let j = 0; j < empList[i].length; j++ ) {
        if ( j == 0 ) object.name = empList[i][j];
        if ( j == 1 ) object.age = empList[i][j];
        if ( j == 2 ) object.address = empList[i][j];
        if ( j == 3 ) object.department = empList[i][j];
    }
    console.log(object);
}

console.clear();
// createEmployee 함수를 활용하는 경우
for(let i = 0; i < empList.length; i++){
    let object = null;
    let name, age, address, department = undefined;

    for(let j = 0; j < empList[i].length; j++ ) {
        if ( j == 0 ) name = empList[i][j];
        if ( j == 1 ) age = empList[i][j];
        if ( j == 2 ) address = empList[i][j];
        if ( j == 3 ) department = empList[i][j];
    }
    object = createEmployee(name, age, address, department);
    console.log(object);
}
