/**
 * 이름, 나이, 주소를 입력 받는 폼 생성
 * - 각 폼에 유효성 체크 진행
 * - 전송 버튼 클릭 시 유효성 체크 진행
 */
import { useRef, useState } from "react";
import { validateUserInfo2 } from "../util/validate2.js";
import InputText from "./InputText.jsx";

export default function UserInfo()  {
    const forms = [
        {label:"이름", type:"text", name:"name", isRequired: true},
        {label:"나이", type:"text", name:"age", isRequired: true},
        {label:"주소", type:"text", name:"address", isRequired: false},
        {label:"직업", type:"text", name:"job", isRequired: false}
    ]

    const refs = useRef({});

    const [form, setForm] = useState({name:'', age:'', address:'', job:''});

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateUserInfo2(refs)) {
            alert(`전송 완료`);
            console.log(`서버 전송 =>`, form);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }
    console.log(`refs =`, refs)


    return (
        <div>
            <h1>User Information Form</h1>
            <form name="userInfoForm" onSubmit={handleSubmit}>
                <ul>
                    {forms.map((item, idx) => 
                        <li key={idx}>
                            {item.isRequired && <span>🎈</span>}<label htmlFor="name">{item.label}</label>
                            { !form?.[item.name]?.trim() &&
                                <span style={{color:"red", fontSize:".6rem"}}> 이름을 입력해주세요</span>
                            }
                            <div>
                                <InputText item={item} value={form[item.name]} handleChange={handleChange} inputRef={(e) => refs.current[item.name] = e}/>
                            </div>
                        </li>
                    )}
                    <li>
                        <button type="submit">정보입력</button>
                        <button type="button" onClick={() => setForm({name:'', age:'', address:'', job:''})}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}