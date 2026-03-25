/**
 * 로그인 처리
 */
class User {
    #id;
    #password;

    constructor (id, password) {
        this.#id = id;
        this.#password = password;
    }

    getID = () => this.#id;
    getPassword = () => this.#password;

    setID = (id) => this.#id = id;
    setPassword = (password) => this.#password = password;
}


// HTML에서 로그인 버튼을 누르면 로그인을 처리하는 함수
function loginCheck() {
    // id , password 값 가져오기
    let id = document.querySelector('#id').value; // React에서는 사용하지 않는 함수
    let password = document.querySelector('#pass').value; // HTML에서 지정한 id 호출
    // 호출한 주소값을 저장할 필요가 있다 - 변수 지정
    // 뒤에 .value를 붙이면 입력된 값을 불러와 저장할 수 있다
    // .value가 붙어있지 않다면 id가 적혀있는 HTML의 DOM객체를 불러온다


    // front-end에서 빈 값을 보내지 않도록 하기 위한 유효성 체크를 필히 진행 (Validation Check)
    // - 데이터의 유무만 확인
    if ( id === '') {
        alert(`ID를 입력해주세요`);
        document.querySelector('#id').focus();
    }
    else if ( password === '' ) {
        alert(`패스워드를 입력해주세요`)
        password = document.querySelector('#pass').focus(); // 커서를 위치하는 focus() 함수
    }
    else {
        // User Class 생성
        let user = new User(id, password);
        let userObj = {id, password}; // {id: 'test', password: '1234'}

        console.log(userObj);

        // 서버에 user 객체 전송하고 끝!

        // 비교 => did=test , dpass=1234 와 입력된 값을 비교를 하자
        // 실제 서버가 없기 떄문에 이러한 방식으로 테스트
        // 서버가 있다면 이 단계에서 끝난다고 함
        if (user.getID() === 'test' && user.getPassword() === '1234') {
            alert(`로그인 성공!!!`);
        }
        else {
            alert(`ID 혹은 패스워드가 일치하지 않습니다!!`);
        }
        // alert - 팝업을 띄우는 함수
        // ID와 Password를 필드로 하는 class를 정의하여, 해당 class를 서버에 전달하여 로그인이 진행되는 방식
    }
    // console.log(id, password);
}