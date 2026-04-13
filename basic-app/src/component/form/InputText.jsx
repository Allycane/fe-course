

// item = name value ...
export default function InputText({item, value, handleChange, inputRef})    {
    const {type, name} = item;
    return (
        <input type={type} name={name} value={value} id={name} onChange={(e) => {handleChange(e)}} ref={inputRef}/>
        // 자식에서 발생한 이벤트를 부모에 있는 handleChange에게 보내서 부모쪽에서 처리하도록 구성
    )
}