import Logo from './Logo.jsx';
import MenuList from './../commons/MenuList.jsx';
import ToggleBtn from './ToggleBtn.jsx';

export default function Header({data}) {
    const { menus = [] } = data || {}; // data 객체가 존재하는 경우에만 구조분해할당을 진행
    // console.log(`menus =>`,menus);
    // console.log(`data =>`, data);
    return(
        <>
            <header className="header">
                <Logo 
                    img={data?.logo?.img}
                    alt="header-logo"
                    style="header-logo-image"
                    title={data?.logo?.name} 
                />
                <MenuList menus={menus} style="header-menu open" />

                <ToggleBtn />
            </header>
        </>
    )
}