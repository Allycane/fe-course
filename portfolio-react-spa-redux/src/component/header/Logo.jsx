import AvatarImage from '../commons/AvatarImage.jsx';
import { useSelector } from 'react-redux'

export default function Logo({img, alt, style, title}) {
    const like = useSelector((state) => state.like.count);
    // count = likeSlice에서 초기에 설정한 변수
    const skillList = useSelector((state) => state.skill.skillList)
    return(
        <>
            <div className="header-logo">
                <AvatarImage 
                    img={img}
                    alt={alt}
                    style={style}/>

                <h1 className="header-logo-title">{title}::SPA::Redux ❤({like} :: {skillList.join(",")})</h1>
            </div>
        </>
    )
}