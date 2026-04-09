import style from "./Button.module.css";

export default function Button({type, name, style}) {
    let {width, h, bgColor, color} = style;

    const handleClick = (e) => {
        console.log(e.target.name, e.target.innerText, `클릭!`);
    }
    return(
        <>
            <button type={type} name={name} style={{width:width, height:h, backgroundColor:bgColor, color:color}} onClick={handleClick} > {name} </button>
            <button type={type} name={name} style={{width:width, height:h, backgroundColor:bgColor, color:color}} onClick={(e) => console.log(e.target.name)} > {name} </button>
        </>
    );
}