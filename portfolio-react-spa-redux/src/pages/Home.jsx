import AvatarImage from "../component/commons/AvatarImage.jsx"
import Menu from "../component/commons/Menu.jsx";
import { useOutletContext } from "react-router-dom"
import { useSelector } from "react-redux";

export default function Home() {
    // console.log(`home data`, data)
    const {data} = useOutletContext(); // content 객체 전체가 넘어옴
    const {img, alt, title, name, description, href, menuName} = data?.home || {} ; 

    const likeCounter = useSelector((state) => state.like.count);
    // state = store, store 내에 등록된 like라는 상품 ( 변수 ) 내의 count라는 기본값을 불러오는 과정
    const projectList = useSelector((state) => state.like.list);

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
            <h2 style={{color:"red"}}>
                ❤ 좋아요 {likeCounter}
            </h2>
            <p>{projectList}</p>
        </section>
    )
}