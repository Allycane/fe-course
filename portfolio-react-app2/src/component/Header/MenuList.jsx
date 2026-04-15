/**
 * MenuList에서는 ul 태그를 넣고 map으로 돌리도록 구성
 * Menu 컴포넌트는 기본적인 Menu를 구성하도록
 */
import React, { useState } from 'react';
import Menu from "./Menu";

export default function MenuList({list, className}) {
    const [name, setName] = useState('Home');
    const handleClick = (name) => {
        setName(name);
    }

    return (
        <nav>
            <ul className={className}>
                {list?.map((item, idx) => 
                    <li key={idx}>
                        <Menu href={item.href} 
                        className={name === item.title ? "header-menu-item active" : item.className} title={item.title} click={handleClick} />
                    </li>
                )}
            </ul>
        </nav>
    );
}

