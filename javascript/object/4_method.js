/**
 * 객체를 생성하는 함수 - 생성자 함수 ( Constructor Function )
 * 객체의 메서드(Method) 정의 : 객체안에 함수형식으로 정의
 * 
 */

const fruit = {
    // Field
    name: 'apple',
    emoji: '🍎',

    // Method
    getName: function() { return this.name; },
    getEmoji: function() { return this.emoji; },
    // 다른 영역에서는 이름이 없는 함수이기 때문에 호출이 불가능하다
    display: function() {return { name: this.name, emoji: this.emoji}; },
    display2: function() {console.log(this.name, this.emoji);
    }
    // this 키워드는 현재의 객체 내에서만 사용되는 self-object 키워드
    // this.name은 property로써 정의가 되지 않음
    // 때문에 property를 별도로 정의해준다면 this.name 정의 가능
}

// 파라미터 인자값 없이 출력을 요청하면 메서드의 데이터 타입을 출력
// console.log(fruit.getName); 
// console.log(fruit.getName);

console.clear();
// 파라미터 인자값을 포함하여 출력을 요청하면 해당 데이터를 출력
console.log(fruit.getName());
console.log(fruit.getEmoji());
console.log(fruit.display());
console.log(fruit.display2());
/* display2()를 출력할 경우 값과 함꼐 undefined가 출력되는데,
이는 display2 자체에서 로그를 출력한 뒤에 렉시컬 밖에서 로그 호출을 시도했을 때 불러오는 값이 존재하지 않아 undefined로 출력되는 것 */






