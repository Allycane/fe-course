/**
 * DOM 객체 생성 후 객체별 회우너가입 이벤트 호출
 */

window.addEventListener('DOMContentLoaded', () => {
    let id = document.querySelector('#id');
    let idMsg = document.querySelector('#idMsg');

    let pwd = document.querySelector('#pwd');
    let pwdMsg = document.querySelector('#pwdMsg');

    let cpwd = document.querySelector('#cpwd');
    let cpwdMsg = document.querySelector('#cpwdMsg');
    
    let name = document.querySelector('#name');
    let nameMsg = document.querySelector('#nameMsg');

    let phone = document.querySelector('#phone');
    let phoneMsg = document.querySelector('#phoneMsg');

    let emailname = document.querySelector('#emailname');
    let emailMsg = document.querySelector('#emailMsg');

    id.addEventListener('input', () => {
        if (id.value.trim() !== '') {
            idMsg.style.display = 'none';
        } else {
            idMsg.style.display = 'inline';
        }
    })

    pwd.addEventListener('input', () => {
        if (pwd.value.trim() !== '') {
            pwdMsg.style.display = 'none';
        }
        else {
            pwdMsg.style.display = 'inline';
        }
    })

    // 비밀번호 확인 = 비밀번호랑 다를 경우 "비밀번호가 일치하지 않습니다' 메세지 출력
    cpwd.addEventListener('input', () => {
        if (cpwd.value.trim() !== '') {
            cpwdMsg.style.display = 'none';
        }
        else {
            cpwdMsg.style.display = 'inline';
        }
    })

    name.addEventListener('input', () => {
        if (name.value.trim() !== '') {
            nameMsg.style.display = 'none';
        }
        else {
            nameMsg.style.display = 'inline';
        }
    })

    phone.addEventListener('input', () => {
        if (phone.value.trim() !== '') {
            phoneMsg.style.display = 'none';
        }
        else {
            phoneMsg.style.display = 'inline';
        }
    })

    emailname.addEventListener('input', () => {
        if (emailname.value.trim() !== '') {
            emailMsg.style.display = 'none';
        }
        else {
            emailMsg.style.display = 'inline';
        }
    })

    /**
     * 회원가입 버튼 이벤트
     */
    btnSignup.addEventListener('click', () => {
        let isValid = true;

        if (id.value.trim() === '') {
            idMsg.style.display = 'inline-block';
            isValid = false;
            id.focus();
        }
        else {
            if(isValid) {
                console.log(`서버전송---->`);
            }
        }
    })
    
}) // window event