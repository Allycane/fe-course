/**
 * 숫자 증가/감소 함수 정의
 */

function counter(string) {
    // 증가인지 감소인지 확인
    // input type : value, <tag> content </tag> - textContent
    let number = document.querySelector('#number').textContent; // 값이 아닌 텍스트로 출력되는 요소
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
