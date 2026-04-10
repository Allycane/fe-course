import { useRef, useState } from "react";


export default function TextInput() {
    const textRef = useRef(null);
    const [name, setName] = useState('');

    const handleClick = () => {
        let text = textRef.current.value.trim(); // 현재 입력된 값을 가져온다
        // 공백을 제거하는 메서드 trim()

        if ( text === "") {
            alert(`값을 입력해주세요~`);
            textRef.current.focus();
        }
        else {
            alert(`서버 전송 완료!`)
            console.log(`${text} 입력완료~`);
        }
    }

    const handleChange = (e) => {
        let text = e.target.value;
        console.log(`입력값 =>`, text);

        if (text != "") {
            setName(text);
        }
        else {
            setName("");
        }
    }

    return (
        <div>
            <h2>Ref : 텍스트 입력</h2>
            <h1>{name}</h1>
            <input type="text" name="text" value={name} ref={textRef} onChange={handleChange}/>
            <button type="button" onClick={handleClick}>제출</button>
        </div>
    );
}