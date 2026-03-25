/**
 * 학생(Student) 클래스 정의
 * 필드 : #이름, #나이, #주소, 이모지
 * 메소드 : setter/getter, display
 */
class Student {
    #name;
    #age;
    #address;
    
    constructor (name, age, address, emoji) {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.emoji = emoji;
    }

    // getter / setter
    // 실행문이 한 줄일때, return과 {}를 생략하고 아래와 같이도 작성이 가능하다
    getName = () => this.#name;
    getAge = () => this.#age;
    getAddress = () => this.#address;
    getEmoji = () => this.emoji;

    setName = (name) => this.#name = name;
    setAge = (age) => this.#age = age;
    setAddress = (address) => this.#address = address;
    setEmoji = (emoji) => this.emoji = emoji;

    display = () => console.log(this.#name, this.#age, this.#address, this.emoji);
}

let dataList = [
    { name: '홍길동', age: 20, address: '서울시', emoji: '🧑'},
    { name: '김철수', age: 21, address: '부산시', emoji: '🧑'},
    { name: '박영희', age: 22, address: '서울시', emoji: '👩'},
    { name: '박정민', age: 23, address: '인천시', emoji: '🧑'},
    { name: '홍길순', age: 24, address: '서울시', emoji: '👩'},
];


// let hongB = new Student();
// let kim = new Student();
// let parkG = new Student();
// let parkB = new Student();
// let hongG = new Student();

// hongB.setName('홍길동');
// kim.setName('김철수');
// parkG.setName('박영희');
// parkB.setName('박정민');
// hongG.setName('홍길순');

// hongB.setAge('20');
// kim.setAge('21');
// parkG.setAge('22');
// parkB.setAge('23');
// hongG.setAge('24');

// hongB.setAddress('서울시');
// kim.setAddress('부산시');
// parkG.setAddress('서울시');
// parkB.setAddress('인천시');
// hongG.setAddress('서울시');

// hongB.setEmoji('🧑');
// kim.setEmoji('🧑');
// parkG.setEmoji('👩');
// parkB.setEmoji('🧑');
// hongG.setEmoji('👩');

// hongB.display();
// kim.display();
// parkG.display();
// parkB.display();
// hongG.display();

// stList = [];
// stList.push(hongB);
// stList.push(kim);
// stList.push(parkG);
// stList.push(parkB);
// stList.push(hongG);
// console.log(stList);

// stListObj = {};
// stListObj['홍길동'] = hongB;
// stListObj['김철수'] = kim;
// stListObj['박영희'] = parkG;
// stListObj['박정민'] = parkB;
// stListObj['홍길순'] = hongG;
// console.clear();
// console.log(stListObj);

// 데이터가 배열 형태로 주어질 경우, 반복문을 활용하여 데이터를 입력한다

/** dataList 배열 객체를 이용하여 학생 객체 생성후 학생리스트 (배열)에 저장 */
const studentList = [];
for (let i = 0; i < dataList.length; i++) {
    // dataList[i] = {} Object Literal
    let obj = dataList[i]; // '홍길동'에 대한 정보 한 줄이 i = 0, 0번지
    let student = new Student(obj.name, obj.age, obj.address, obj.emoji);
    studentList.push(student);
}
console.log(studentList);

/** studentList 배열의 객체 출력 */
console.log(`---------- Student List ----------`);

for (let i = 0; i < studentList.length; i++) {
    let student = studentList[i];
    console.log(student.getName()+`\t`, student.getAge()+`\t`, student.getAddress()+`\t`, student.getEmoji()+`\t`);
}