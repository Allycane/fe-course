/**
 * Avatar의 이미지를 받아서 App에 띄우도록 하는 컴포넌트
 */
// import style from './Avatar.module.css';

export default function AvatarImage({img, style}) {
    return (
        <>
        <img src={img} className={style} alt="photo"/>
        </>
    );
}