import AvatarImage from './Avatar_Image.jsx';
import style from './Avatar.module.css';

/**
 * 
 * Avatar.jsx - 아바타 이미지 + 이름
 */
export default function Avatar({name, img}) {
    return (
        <div className={style.avatar}>
            <AvatarImage img={img} style={style.avatar_img_circle}/>
            <p>{name}</p>
        </div>
    );
}
// App 에서 이미지 데이터를 받은 Avatar가 name은 출력하고, 그대로 AvatarImage에게 img 데이터를 추가로 넘감.