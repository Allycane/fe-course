import * as store from "../commons/object.js";

// 1. store 생성
let fruitStore = store.getObjects();

// 2. 과일 생성
let apple = new store.Fruit('apple', '🍎');
let lemon = new store.Fruit('lemon', '🍋');
let banana = new store.Fruit('banana', '🍌');
// 생성자 함수로 진행했기 때문에 createObject는 사용하지 않음

// 3. store에 과일 담기
store.setObject('apple', apple);
store.setObject('lemon', lemon);
store.setObject('banana', banana);

// 4. store에서 과일 삭제
store.deleteObject('apple');
store.deleteObject('lemon');

console.log(fruitStore);
