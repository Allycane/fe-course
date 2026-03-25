/** 
 * 생성자 함수를 통한 객체 생성
 * 객체의 틀을 이용하여 다수의 객체를 생성하는 함수 - 생성자 함수
 * 
 */

// Object Literal 
const fruit = {
    name: 'apple',
    emoji: '🍎',
};

// 생성자 함수로 생성되는 객체의 틀 정의 => 생성자 함수로 생성됨
// 생성자 함수의 함수명은 대문자로 시작해야 한다
// 사과 레몬 오렌지 > name color emoji
// 공통점이 있는 요소들을 만들 때 사용한다
function Fruit(name, color, emoji) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.color, this.emoji);  
    };
}

let apple = new Fruit('apple', 'red', '🍎')
let orange = new Fruit('orange', 'orange', '🍊')
let lemon = new Fruit('lemon', 'yellow', '🍋')

// console.log(apple.display());
// console.log(orange.display());
// console.log(lemon.display());
apple.display();
orange.display();
lemon.display();

// 동일한 틀을 가지고 있는 다수의 객체를 생성할 때 효율적으로 사용할 수 있다.


// 학생 성적 리스트 관리
// 홍길동, 스미스, 이순신, 김유신, 제임스 5명의 학생 성적 리스트 관리
// name kor eng math의 필드값을 가지는 학생 성적 관리 탬플릿
// display 함수로 전체 데이터 출력

function Score(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;

    this.display = () => {
        console.log(this.name, this.kor, this.eng, this.math);
    },
    
    //총점 반환
    this.sum = () => {
        // return this.kor + this.eng + this.math;
        return parseInt(this.kor) + parseInt(this.eng) + parseInt(this.math);
    }
    //평균 반환
    this.avg = () => {
        return parseInt(this.sum() / 3);
    }
};


// 성적 리스트 객체 생성 함수
function createScroeList(st1, st2, st3, st4, st5) {
    return {st1, st2, st3, st4, st5}; // (st1: 학생정보), (st2...)
}

console.clear();

let hong = new Score ('홍길동', '40', '10', '20');
let smith = new Score ('스미스', '30', '80', '45');
let lee = new Score ('이순신', '90', '24', '89');
let kim = new Score ('김유신', '76', '10', '67');
let james = new Score ('제임스', '17', '100', '43');

let scoreList = createScroeList(hong, smith, lee, kim, james);
// console.log(scoreList);
hong.display();
smith.display();
lee.display();
kim.display();
james.display();

console.clear();

console.log(`${hong.name} 총점 / 평균 = ${hong.sum()} / ${hong.avg()}`);
console.log(`${smith.name} 총점 / 평균 = ${smith.sum()} / ${smith.avg()}`);
console.log(`${lee.name} 총점 / 평균 = ${lee.sum()} / ${lee.avg()}`);
console.log(`${kim.name} 총점 / 평균 = ${kim.sum()} / ${kim.avg()}`);
console.log(`${james.name} 총점 / 평균 = ${james.sum()} / ${james.avg()}`);


// 생성자 함수를 호출할 때 new를 잊지 않도록
// 일반 함수가 아닌데도 function으로 시작하여 호이스팅이 작동한다, 전역으로 처리됨





