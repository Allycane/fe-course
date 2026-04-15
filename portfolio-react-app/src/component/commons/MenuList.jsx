import Menu from './Menu.jsx';
import { useState } from 'react';

export default function MenuList({menus, style}) {
    const [name, setName] = useState('Home');
    const handleClick = (name) => {
        // 메뉴를 클릭하면 콘솔창에 각 메뉴의 이름값이 로그로 찍힌다
        // console.log(`Menu Name -->`, name)
        setName(name);
    }
    // console.log(`setName ::`, name);
    
    return(
        <nav>
            <ul className={style}>
                {menus.map((menu, idx) => 
                    <li key={idx}>
                        <Menu href={menu.href} 
                        style={name === menu.name ? "header-menu-item active" : menu.style} name={menu.name} click={handleClick}/></li>
                )}
            </ul>
        </nav>
    )
}