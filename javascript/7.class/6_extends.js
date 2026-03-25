/**
 * 클래스 간의 상속 관계 표현 : extends
 * 부모가 가지고 있는 필드, 혹은 메서드를 자식이 상속받아 사용하도록 정의
 * 
 */
// Animal 클래스를 상속받아 Dog, Tiger, Lion 자식 클래스 생성
// 자식 is a 부모 : ⭕ => 자식 클래스를 정의할 때 'extends 부모'
// 예시 ) 개 is a 동물

// Animal 클래스 정의 ( 부모 클래스 )
class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    display = () => console.log(this.name, this.emoji);
    sleep = () => console.log(`${this.name}(${this.emoji})이(가) 잠을 잡니다~)`);
}

// Dog 클래스 정의 ( 자식 클래스 )
class Dog extends Animal {
    constructor (name, emoji, color) {
        super(name, emoji); // 상속받은 부모의 생성자 호출
        // 부모의 생성자 호출 후 name, emoji 인스턴스는 자식에 저장
        this.color = color;
    }

    //display(), sleep() 메서드 주소 참조
}

class Poodle extends Dog {
    constructor(name, emoji, color, food) {
        super(name, emoji, color);
        // super()는 여러개로 선언할 수 없고 단일 상속만 가능하다
        // 생성자 정의 시 반드시 맨 위에 호출되어야 함
        this.food = food;
    }
}

let animal = new Animal('animal', '🐰')
console.log(animal);
animal.display();
animal.sleep();

let dog = new Dog('happy', '🐩', 'brown');
// Dog에 데이터 저장 - super()로 호출한 데이터지만 자식인 Dog에 저장이 된다.
// 메서드는 extends로 연결된 부모와 자식이 공유하여 사용한다
console.log(dog);
dog.display();
dog.sleep();

let dog2 = new Poodle('해피', '🦮', 'brown', '사료');
console.log(dog2);
dog2.display();
dog2.sleep();

