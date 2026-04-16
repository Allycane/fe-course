import AvatarImage from "../component/commons/AvatarImage.jsx"
import Menu from "../component/commons/Menu.jsx";
import { useOutletContext } from "react-router-dom"

export default function Home() {
    // console.log(`home data`, data)
    const data = useOutletContext(); // content 객체 전체가 넘어옴
    const {img, alt, title, name, description, href, menuName} = data?.home || {} ; 

    return(
        <section id="home">
            <AvatarImage img={img} alt={alt} style="home-avatar"/>
            {/* <img src="images/favicon.ico" alt="photo" class="home-avatar"/> */}

            <h2 className="home-title">
                Hello <br/>
                I'm <strong className="home-title-strong">{title}</strong>, 
                {name}
            </h2>
            <p className="home-description">{description}</p>

            <Menu href={href} style="home-contact" name={menuName}/>
        </section>
    )
}