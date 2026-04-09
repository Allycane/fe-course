import Menu from "./component/menu/Menu.jsx";
import MenuList from "./component/menu/MenuList.jsx";
import style from "./component/menu/Menu.module.css";

export default function App()  {
    let list = [
        {"title": "로그인", "domain":"#", "style":style.menu1},
        {"title": "회원가입", "domain":"#", "style":style.menu1},
        {"title": "고객센터", "domain":"#", "style":style.menu1},
        {"title": "게시판", "domain":"#", "style":style.menu1},
        {"title": "MYCGV", "domain":"#", "style":style.menu1}
    ]
    let list2 = [
        {"title": "예매", "domain":"#", "style":style.menu2},
        {"title": "영화", "domain":"#", "style":style.menu2},
        {"title": "영화관", "domain":"#", "style":style.menu2},
        {"title": "이벤트", "domain":"#", "style":style.menu2},
        {"title": "스토어", "domain":"#", "style":style.menu2}
    ]

    return (
        <>
            <div>
                <Menu title='네이버' domain="http://www.naver.com" style={style.menu1} />
                <Menu title='구글' domain="http://www.google.com" style={style.menu2} />
            </div>
            <MenuList list={list}/>
            <MenuList list={list2}/>
        </>
    );
}