import React from 'react';
import Logo from './Header/Logo';
import MenuList from './Header/MenuList';
import MenuBtn from './Header/MenuBtn';

export default function Header({data}) {
    // console.log(`Header --->`, data)
    return (
        <header class="header">
            <Logo img="/images/favicon.ico" 
            alt="photo" 
            className="header-logo-image"/>

            <MenuList list={data?.menuList} className="header-menu open"/>

            {/* <button class="header-toggle"><i class="fa-solid fa-bars"></i></button> */}
            <MenuBtn className="header-toggle"/>
        </header>
    );
}

