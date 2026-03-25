/**
 * class (클래스) : 객체를 생성하기 위한 설계도(틀)
 * - 생성자 함수와의 차이점
 * - 객체지향언어의 클래스와는 다름을 이해
 * - JS에서 실행 시 내부적으로 프로토타입 기반의 형식으로 실행됨
 * - new 키워드를 사용하여 객체를 생성
 * 
 * 형식
 * class 클래스명 {
 *      // 필드명 ( Field )
 *      // 생성자 ( Constructor )
 *      // 메소드 ( Method )
 * }
 */

class Animal {
    // Field = 변수나 상수, static으로 정의 - 클래스 상수 / 클래스 변수
    // class를 만들지 않아도 호출이 가능하기 떄문에 클래스 상수 / 클래스 변수라 칭한다
    static MAX_SIZE = 10; // 대문자로 주는 경우는 상수 
    static className = 'Animal';
    // stactic으로 정의된 변수, 상수는 객체 생성 전, 별도의 메모리에 저장됨
    // new를 사용하지 않아도 별도의 메모리에 저장된다. - static 키워드가 붙은 애들이 별도로 저장되는 메모리 = stack frame
    // static으로 정의된 친구

    // Constructor = 객체 생성 시 호출, new라는 키워드
    constructor(name, emoji) {
        // Field에서 선언할 변수를 파라미터에 직접 선언
        this.name = name;
        this.emoji = emoji;
        // 아 안에서 선언된 this.name과 this.emoji는 class Animal이라 하는 블록 내에서 호출이 가능하다
    }

    // Method = 기능, 동작을 함수로 정의
    display = () => {
        console.log(this.name, this.emoji);
    }
}

console.log(`Animal.MAX_SIZE = ${Animal.MAX_SIZE}`);
console.log('className = ${Animal.className');


let dog = new Animal('happy', '🐩'); // 생성자에서 선언한 파라미터 입력
console.log(dog);
console.log(dog.name);
console.log(dog.emoji);
console.log(typeof dog);

console.clear();

// dog.display();
