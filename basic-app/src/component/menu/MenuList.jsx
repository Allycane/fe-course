import Menu from "./Menu.jsx";
import style from "./Menu.module.css";

export default function MenuList({list}) {
    return (
        <ul className={style.menu_list}>
            {
                list.map((menu, idx) => <li><Menu title={menu.title} domain={menu.domain} style={menu.style} key={idx}/></li>)
            }
        </ul>
    );
}