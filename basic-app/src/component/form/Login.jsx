import { useRef, useState } from "react";


export default function Login() {
    const idRef = useRef(null);
    const passRef = useRef(null);
    const nameRef = useRef(null);
    const [form, setForm] = useState({"id":"", "pass":"", "name":""});

    const handleFormChange = (e) => {
        // id = test, pass = 1234
        let {name, value} = e.target;
        console.log(name, value)

        setForm({...form, [name]:value}); 
        // setForm을 호출할때 form을 호출하는데, 안에 있는 요소를 form의 요소로 가져와 새로운 객체를 생성한다.
        // 변수를 대괄호로 묶어 업데이트 명시
    }
    console.log(form);
    

    // form 태그를 추가하고, button type을 submit으로 변경, submit을 진행할 때 handleLoginSubmit이 호출되도록 하는 방법 => 더 많이 쓰임
    const handleLoginSubmit = (e) => {
        // alert(`submit`);
        e.preventDefault();
        /**
         * submit button을 클릭하면 값이 입력되지 않아도 값이 넘어가게 되는데,
         * handleLoginSubmit을 통해 validation 체크를 진행하기도 전에 값이 전송되는 것을 막기 위해
         * preventDefault() 함수를 이용해 이벤트가 실제 DOM으로 전송되는 것을 막아주는 역할을 수행한다
         */

        let idText = idRef.current.value.trim();
        let passText = passRef.current.value.trim();
        let nameText = nameRef.current.value.trim();

        if ( idText === "" ){
            alert(`아이디를 입력해주세요!`);
            idRef.current.focus();
        }
        else if ( passText === "" ){
            alert(`패스워드를 입력해주세요!`);
            passRef.current.focus();
        }
        else if ( nameText === "" ) {
            alert(`이름을 입력해주세요!`);
            nameRef.current.focus();
        }
        else {
            // 아이디와 패스워드 전송 ==> Object Literal

            alert(`로그인 성공~`);
            console.log(`서버 전송 --->`, form);
        }
    }

    return(
        <>
            <h1>로그인 폼</h1>
            <form name="" onSubmit={handleLoginSubmit}> 
                <ul style={{listStyleType:"none"}}>
                    <li>
                        <label htmlFor="id">아이디</label>
                        <input type="text" id="id" name="id" value={form.id} ref={idRef} onChange={handleFormChange}/>
                    </li>
                    <li>
                        <label htmlFor="pass">비밀번호</label>
                        <input type="password" id="pass" name="pass" value={form.pass} ref={passRef} onChange={handleFormChange}/>
                    </li>
                    <li>
                        <label htmlFor="name">성명</label>
                        <input type="text" id="name" name="name" value={form.name} ref={nameRef} onChange={handleFormChange}/>
                    </li>
                    <li>
                        <button type="submit">Login</button>
                        <button type="button">Reset</button>
                    </li>
                </ul>
            </form>
        </>
    );
}
// 서버로 보내는 작업을 onSubmit이라는 함수가 진행하도록 함