/**
 * 아바타 이미지를 리스트로 나열
 */
import AvatarImage from './AvatarImage.jsx';
import style from './Avatar.module.css';

export default function AvatarImageList({list}) {
    return (
        <div className={style.avatar_img_list}>
        {
            list.map(item => <AvatarImage img={item.img} />)
        }
        </div>
    );
}