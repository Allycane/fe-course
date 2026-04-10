import { useRef, useState } from 'react';
import './cgv.css';
import './commons.css';

export default function Join() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const cpwdRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailNameRef = useRef(null);
    const emailDomainRef = useRef(null);

    const initForm = {
        id: '',
        pwd: '',
        cpwd: '',
        name: '',
        phone: '',
        emailName: '',
        emailDomain: 'default'
    }

    const [form, setForm] = useState(initForm);
    const [error, setError] = useState({...initForm});

    const handleFormChange = (e) => {
        const {name, value} = e.target;

        setForm({...form, [name]:value});
    }
    console.log(form);


    const handleJoinSubmit = (e) => {
        e.preventDefault();

        // Validation Check
        if (idRef.current.value === "") {
            // alert(`아이디를 입력해주세요!`)
            setError({...error, id:'아이디를 입력해주세요!'});
            idRef.current.focus();

        }
        else if (pwdRef.current.value === "") {
            setError({...error, pwd:'12자 이내의 패스워드를 입력해주세요!'});
            pwdRef.current.focus();
        } 
        else if (cpwdRef.current.value === "") {
            setError({...error, cpwd:'패스워드를 다시 한 번 입력해주세요!'});
            cpwdRef.current.focus();
        } 
        else if (nameRef.current.value === "") {
            setError({...error, name:'이름을 입력해주세요!'});
            nameRef.current.focus();
        } 
        else if (phoneRef.current.value === "") {
            setError({...error, phone:'연락처를 입력해주세요!'});
            phoneRef.current.focus();
        } 
        else if (emailNameRef.current.value === "") {
            setError({...error, emailName:'이메일을 입력해주세요!'});
            emailNameRef.current.focus();
        }
        else if (emailDomainRef.current.value === "default") {
            setError({...error, emailName:'이메일을 선택해주세요!'});
            emailNameRef.current.focus();
        }
        else {
            console.log(`서버 전송 --->`)
        }
    }
    
    const handleButton = (e) => {
        if (e.target.name === "duplicate") {
            alert(`사용할 수 있는 아이디입니다~`)
        }
        else {
            //reset을 입력했을 경우 폼을 초기화 하고 싶다
            alert(`입력폼을 초기화 합니다`)
            setForm({...initForm});
            // 말 그대로 초기값을 다시 불러오면 되는것이었다..
        }
    }

    /**
     * 값이 입력되지 않았을 때 문구가 활성화 되어 있다가, 하나라도 입력되면 문구가 사라지도록 함
     * 
     * 문구가 출력되는 span 태그를 {}로 감싸고
     * { 
     *      form.id === "" ?
     *      <span id="idMsg"> 아이디를 입력해주세요 </spna> : ''
     * }
     * 삼항연산자를 이용하여 처리할 수 있다
     * 
     * 
     * 더 줄여서 이항연산자로 처리할 수도 있다
     * { 
     *      form.id === "" && <span id="idMsg"> 아이디를 입력해주세요 </spna>
     * }
     * 이항연산자 : 조건문이 true일때만 실행하도록 한다
     */

    return(
        <>
            <div className="content">
                <div className="join-form center-layout">
                    <h1 className="center-title">회원가입</h1>
                    <form name='' onSubmit={handleJoinSubmit}>
                        <ul>
                            <li>
                                <label htmlFor="id"><b>아이디</b></label>
                                <span id="idMsg">{error.id}</span>
                                <div>
                                    <input type="text" name="id" id="id" value={form.id} placeholder="아이디를 입력해주세요 (6~20자 이상)" ref={idRef} onChange={handleFormChange}/>
                                    <button type='button' onClick={handleButton} name='duplicate'>중복확인</button>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="pwd"><b>패스워드</b></label>
                                <span id="pwdMsg">{error.pwd}</span>
                                <input type="password" name="pwd" id="pwd" value={form.pwd} placeholder="비밀번호를 입력해주세요 (문자, 숫자, 특수문자 포함 6~12자 이상)" ref={pwdRef} onChange={handleFormChange}/>
                            </li>
                            <li>
                                <label htmlFor="cpwd"><b>패스워드 확인</b></label>
                                <span id="cpwdMsg">{error.cpwd}</span>
                                <input type="password" name="cpwd" id="cpwd" value={form.cpwd} placeholder="비밀번호를 다시 입력해주세요" ref={cpwdRef} onChange={handleFormChange}/>
                            </li>
                            <li>
                                <label htmlFor="name"><b>이름</b></label>
                                <span id="nameMsg">{error.name}</span>
                                <input type="text" name="name" id="name" value={form.name} placeholder="홍길동" ref={nameRef} onChange={handleFormChange}/>
                            </li>
                            <li>
                                <label htmlFor="phone"><b>전화번호</b></label>
                                <span id="phoneMsg">{error.phone}</span>
                                <input type="text" name="phone" id="phone" value={form.phone} placeholder="01012345678 ('-' 없이 입력)" ref={phoneRef} onChange={handleFormChange}/>
                            </li>
                            <li>
                                <label htmlFor="emailName"><b>Email</b></label>
                                <span id="emailMsg">{error.emailName}</span>
                                <div>
                                    <input type="text" name="emailName" id="emailName" value={form.emailName} placeholder="example" ref={emailNameRef} onChange={handleFormChange}/>
                                    <span>@</span>
                                    <select name="emailDomain" id="emailDomain" value={form.emailDomain} ref={emailDomainRef} onChange={handleFormChange}>
                                        <option value="default">선택</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <button type="button" onClick={handleButton} name='reset'>다시쓰기</button>
                                <button type="submit">가입하기</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    );
}