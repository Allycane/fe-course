/**
 * DOM 객체 생성 후 객체별 이벤트 호출
 */
window.addEventListener('DOMContentLoaded', () => {
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let idMsg = document.querySelector('#idMsg');
    let pwdMsg = document.querySelector('#pwdMsg');
    let btnLogin = document.querySelector('#btnLogin'); // button의 객체를 미리 불러옴

    id.addEventListener('input', () => {
        if(id.value.trim() !== '') {
            idMsg.style.display = 'none';
        }
    })

    pwd.addEventListener('input', () => {
        if(pwd.value.trim() !== '') {
            pwdMsg.style.display = 'none';
        }
    })

    btnLogin.addEventListener('click', () => {
        let isValid = true;

        if (id.value.trim() === '') {
            idMsg.style.display = 'block';
            idMsg.style.fontSize = '12px'
            idMsg.style.color = 'red';
            idMsg.textContent = '아이디를 입력해주세요';
            id.focus();
            isValid = false;
        }
        else if (pwd.value.trim() === '') {
            pwdMsg.style.display = 'block';
            pwdMsg.style.fontSize = '12px'
            pwdMsg.style.color = 'red';
            pwdMsg.textContent = '패스워드를 입력해주세요';
            pwd.focus();
            isValid = false;
        }
        else { 
            if(isValid) {
                console.log(`서버전송--->`, id.value, pwd.value)
            }
        }
    })
})

/*
// onclick=loginCheck()로 함수를 호출하여 로그인의 유효성을 체크하는 경우

const loginCheck = () => {
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let idMsg = document.querySelector('#idMsg');
    let pwdMsg = document.querySelector('#pwdMsg')

    id.addEventListener('input', () => {
        if(id.value.trim() !== '') {
            idMsg.style.display = 'none';
            // trim() - 공백을 제거하는 메서드
        } else {

        }
        // 입력값이 한 글자라도 입력되면, 입력되지 않았다는 경고메세지가 표시되지 않는다
    })
    pwd.addEventListener('input', () => {
        pwdMsg.style.display = 'none';
    })

    if (id.value === ''){
        alert(`아이디를 입력해주세요!`);
        id.focus();
    } else if (pwd.value === '') {
        alert(`패스워드를 입력해주세요!`);
    } else {
        // 서버 전송
        console.log(id.value, pwd.value, '서버전송');
    }
} */