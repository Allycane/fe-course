/**
 * 이름, 나이, 주소를 입력 받는 폼 생성
 * - 각 폼에 유효성 체크 진행
 * - 전송 버튼 클릭 시 유효성 체크 진행
 */
import { useRef, useState } from "react";
import { validateUserInfo } from "../util/validate.js";

export default function UserInfo()  {
    const refs = {
        // Ref가 많아질 경우, 객체로 선언할 수도 있다
        nameRef:useRef(null),
        ageRef:useRef(null),
        addressRef:useRef(null),
        jobRef:useRef(null)
    }
    // const nameRef = useRef(null);
    // const ageRef = useRef(null);
    // const addressRef = useRef(null);
    // const jobRef = useRef(null);

    const [form, setForm] = useState({name:'', age:'', address:'', job:''});

    // const validateUserInfo = () => {
    //     if (nameRef.current.value.trim() === '') {
    //         nameRef.current.focus();
    //         return false;
    //     }
    //     else if (ageRef.current.value.trim() === '') {
    //         ageRef.current.focus();
    //         return false;
    //     }
    //     else if (addressRef.current.value.trim() === '') {
    //         addressRef.current.focus();
    //         return false;
    //     }
    //     return true;
    //     // 참 값을 반홚야 validationUserInfo 쪽에서 참 값을 받아 로그가 찍힌다\
    //     // true 값 이외의 값을 차단하기 위해 입력이 완료되지 않은 값은 false값을 반환하여 체크가 완료되도록 진행함
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // validatateUserInfo를 모듈로 js 파일로 생성한 곳에 nameRef 등의 인자값을 보내주기 위함
        if (validateUserInfo(refs)) {
            alert(`전송 완료`);
            console.log(`서버 전송 =>`, form);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }

    // const handleReset = (e) => {
    //     setForm({name:'', age:'', address:''});
    // }


    return (
        <div>
            <h1>User Information Form</h1>
            <form name="userInfoForm" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="name">이름</label>
                        {   form.name === '' ?
                            <span style={{color:"red", fontSize:".6rem"}}> 이름을 입력해주세요</span> : ''
                        }
                        <div>
                            <input type="text" name="name" value={form.name} id="name" ref={refs.nameRef} onChange={handleChange}/>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="age">나이</label>
                        {   !form.age?.trim() &&
                            <span style={{color:"red", fontSize:".6rem"}}> 나이를 입력해주세요</span>
                        }
                        <div>
                            <input type="text" name="age" value={form.age} id="age" ref={refs.ageRef} onChange={handleChange}/>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="address">주소</label>
                        {   form.address === '' &&
                            <span style={{color:"red", fontSize:".6rem"}}> 주소를 입력해주세요</span>
                        }
                        <div>
                            <input type="text" name="address" value={form.address} id="address" ref={refs.addressRef} onChange={handleChange}/>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="job">직업</label>
                        {   form.job === '' &&
                            <span style={{color:"red", fontSize:".6rem"}}> 직업를 입력해주세요</span>
                        }
                        <div>
                            <input type="text" name="job" value={form.job} id="job" ref={refs.jobRef} onChange={handleChange}/>
                        </div>
                    </li>
                    <li>
                        <button type="submit">정보입력</button>
                        <button type="button" onClick={() => setForm({name:'', age:'', address:'', job:''})}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}