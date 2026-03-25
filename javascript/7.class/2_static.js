/**
 * static 상수, 메서드 정의 - 클래스 상수, 클래스 메서드
 * static 키워드가 붙은 상수, 메서드
 * - 호출시 : 클래스명.상수, 클래스명.변수
 * - static이 붙은 상수, 메서드는 stack의 static 메모리 영역에 별도 저장되므로
 *  객체 생성 전 호출이 가능하다
 * 
 */

class Fruit {
    // field
    static MAX_SIZE = 10;
    // 변수나 상수를 정의할 때는 , 를 통해 그룹핑하여 정의할 수가 없다
    // name, color, emoji; 정의 불가
    name;
    color;
    emoji;    
    // 전역에 선언한 name color emoji는 생략이 가능하다
    
    // constructor
    constructor(name, color, emoji) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        // this.name의 name은 필드상의 변수, 뒤에 붙는 name은 파라미터의 name
        // Parameter는 아무 이름이나 정의해줘도 되지만 가독성을 위해서 그대로 사용하는 경우가 많음

        /* this.name 등을 사용하는 이유 : 파라미터 abc는 constructor 블록 내에서만 살아있지만, 
        메서드 영역에서도 사용을 하기 위해서 abc 라는 파라미터 값을 전역변수 name 등에 넣는 것*/
    }
    // method 
    getName = () => { return this.name; }
    // static getName = () => { return this.name; }
    // static이 붙은 getName은 stack frame에 저장되어 있기 때문에 apple.getName()으로 호출되지 않는다
    // 이러한 경우는 클래스로 호출하여 Fruit.getName()으로 호출이 가능하다

    // getName이라는 메서드의 이름이 같지만 에러가 발생하지 않는 이유는
    // static getName은 stack frame에 저장이 되고, getName은 Heap에 저장이 되어있기 때문
    // static getName을 호출하면 class 명을 출력하고, getName을 호출하면 변수가 호출된다

    static create = (name, color, emoji) => {
        return new Fruit(name, color, emoji);
        // create를 호출하면 클래스 ( 자기 자신 ) 생성
        // create 의 파라미터 인자를 추가 후, Fruit 내의 데이터에 전달
    }
}

let apple = new Fruit('apple', 'red', '🍎');

console.log(apple);
console.log(apple.getName());
// console.log(Fruit.getName());

// create 함수로 lemon 객체 생성
let lemon = Fruit.create('lemon', 'yellow', '🍋');
console.log(lemon);
console.log(lemon.getName());

