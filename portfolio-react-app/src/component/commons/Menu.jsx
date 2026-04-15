export default function Menu({href, style, name, click}) {
    return(
        <a href={href} className={style} onClick={()=>click(name)}>{name}</a>
    )
}
// 콜백함수 안에서 부모가 보내는 클릭 이벤트의 이름을 받아온다
// 부모인 MenuList에서 click={handleClick} 이란 함수 주소를 보내 자식인 Menu 컴포넌트가 해당 함수를 처리할 수 있도록 함
// 함수가 이름을 콘솔로 찍는 내용 => 자식이 함수와 name값을 받아 해당 값을 출력하는 과정