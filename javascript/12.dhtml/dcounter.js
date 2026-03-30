/**
 * DOM 객체를 생성하기 전 호출되어지는 함수
 */
window.addEventListener('DOMContentLoaded', function() {
    // DOMContentLoaded = DOM 객체가 형성된 다음에 함수를 호출한다라는 의미의 Parameter
    // this.alert('content 로드 완료 !!');
    initForm();
});

// initForm() : content 안에 추가되는 HTML 폼 생성 함수
function initForm() {
    let output = `
    <h1>Counter</h1>
    <div>
        <h2 id="number">0</h2>
        <!--
        <button type="button" onclick="counter('increase')">increment(+)</button>
        <button type="button" onclick="counter('decrease')">decrement(-)</button>
        -->
        <button type="button" class="button" data-operation="increment">increment(+)</button>
        <button type="button" class="button" data-operation="decrement">decrement(-)</button>
        </div>
    `;

    document.querySelector('#content').innerHTML = output;
    // DOM 객체를 상위 HTML 코드를 통해 output으로 생성한다
    // 해당 output 아래에 버튼과 같은 요소가 작성되어야 정상적으로 이벤트가 발생한다
    // 화면이 출력되기 전에 button과 같은 이벤트 요소가 먼저 선언될 경우, null 값으로 들어가 작동하지 않는다



    // 버튼 이벤트 관리 : class와 data-operation 추가 이후
    let buttons = document.querySelectorAll('.button'); // 한 개 이상의 버튼을 관리
    console.log(buttons);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let number = document.querySelector('#number').textContent;
            let type = button.dataset.operation;
            if ( type === 'increment' ) {
                // 0 이상인 경우 증가
                if (number >= 0) {
                    document.querySelector('#number').textContent = ++number;
                }
            }
            else {
                // 0 보다 큰 경우에만 감소
                if (number > 0) {
                    document.querySelector('#number').textContent = --number;
                }
            }
            console.log(number);
        });
    });
}

// Button Event
const counter = (string) => {
    let number = document.querySelector('#number').textContent;
    console.log(string, number);
    
    if ( string === 'increase' ) {
        // 0 이상인 경우 증가
        if (number >= 0) {
            document.querySelector('#number').textContent = ++number;
        }
    }
    else {
        // 0 보다 큰 경우에만 감소
        if (number > 0) {
            document.querySelector('#number').textContent = --number;
        }
    }
    console.log(number);
}