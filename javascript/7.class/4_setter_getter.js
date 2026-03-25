/**
 * 사원 클래스 정의
 * - 사원번호(#), 사원명, 나이를 입력받아 객체 생성
 * 
 */
class Employee {
    #empno;
    #name;
    #age;

    constructor (empno, name, age) {
        this.#empno = empno;
        this.#name = name;
        this.#age = age;
    }

    // getter / setter
    getEmpno = () => { return this.#empno; } // 데이터를 받는 역할
    getName = () => { return this.#name; }
    getAge = () => { return this.#age; }
    
    setEmpno = (empno) => { this.#empno = empno; } // 데이터를 받아서 주는 역할
    setName = (name) => { this.#name = name; }
    setAge = (age) => { this.#age = age; }

    display = () => { console.log(this.#empno, this.#name, this.#age); }

    // 모든 데이터를 private으로 설정 - 외부에서는 어떤 데이터도 접근 불가
    // getter와 setter로만 데이터에 접근 가능
}

let hong = new Employee();
hong.setEmpno('3345');
hong.setName('홍길동');
hong.setAge(30);
console.log(hong.getEmpno());
console.log(hong.getName());
console.log(hong.getAge());

hong.display();

let smith = new Employee('4869', '스미스', 35);
smith.display();

// 배열에 담아서 관리 
let empList = [];
// empList[0] = hong;
// empList[1] = smith;

// Instance Method - static이 붙지 않음 - 배열.메서드 - Array.reduce / Array.push
// Static Method - static이 붙음 - 클래스.메서드
// 배열의 빈 공간에 순차적으로 들어간다
empList.push(hong);
empList.push(smith);

// 배열 내의 데이터 꺼내기
console.log('empList.pop(hong) :: \n', empList.pop(hong));
// 배열에서 빠져나온 출력값 확인


console.log(empList);

// 객체 내에 담아서 관리 - 주소값 참조
let empListObj = {};
empListObj['hong'] = hong;
empListObj['smith'] = smith;

console.log(empListObj);

