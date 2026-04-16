import { Link, NavLink } from "react-router-dom"

export default function Menu({href, style, name}) {
    return(
        // <a href={href} className={style} onClick={()=>click(name)}>{name}</a>

        // <Link to={href} className={style}>{name}</Link>
        <NavLink to={href} end={href === "/"} className={({isActive})=>
            isActive ? `${style} active` : style
        }>{name}</NavLink>
    )
}
// 메뉴를 클릭했을때 라우팅을 진행해야 함
// Link는 컴포넌트이기 때문에 함수를 직접 적용할 수 없다
// NavLink에 callback 함수를 적용해 isActive를 적용할 수 있다