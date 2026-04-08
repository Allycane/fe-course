/**
 * Avatar image와 이름을 표시하는 내용의 컴포넌트
 */
import AvatarImage from './AvatarImage.jsx';
import style from './Avatar.module.css';

export default function Avatar({img, name}) {
    return (
        <div className={style.avatar}>
            <AvatarImage img={img} style={style.avatar_img_circle}/>
            <h2>{name}</h2>
        </div>
    );
}