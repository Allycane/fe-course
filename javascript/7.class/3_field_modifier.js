/**
 * class 필드에 선언되는 변수, 상수에 대한 접근 제한자
 * 
 * 변수, 상수 앞에 #을 붙이면 private
 * private으로 설정 - class 내부에서만 접근 가능, 외부에서는 접근 불가
 * #이 붙지 않으면 모두 public - class 내부, 외부에서 접근 가능
 * 
 */

class Person {
    #empno; // Private
    name;
    age;

    constructor (empno, name, age) {
        this.#empno = empno; // Private
        this.name = name;
        this.age = age;
    }

    display = () => {
        console.log(this.#empno, this.name, this.age);
    }

    setEmpNo = (empno) => {
        this.#empno = empno;
    }

    getEmpNo = () => { return this.#empno; }
    // 사원번호만을 확인하는 메서드
}

let hong = new Person('1234', '홍길동', 30);
hong.display();
// display 도 Person 클래스 내에 있기 때문에 출력은 정상적으로 진행된다

console.log(hong.name);
console.log(hong.age);
console.log(hong.empno);
// 출력 시 에러는 발생하지 않고 undefined로 출력, 접근은 되지만 값을 주지 않는다.

// hong.empno = '4567';
// 외부에서 접근이 불가능 하기 때문에 이와 같은 식으로 private 데이터 값을 변경할 수 없다
// 내부에서 접근이 가능하도록 메서드를 내부에서 생성해주면 된다

hong.setEmpNo('4567');
hong.display();
console.log(hong.getEmpNo());
