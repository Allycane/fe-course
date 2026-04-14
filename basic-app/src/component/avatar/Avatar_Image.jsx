import Image from './../../commons/Image.jsx';

export default function AvatarImage({img, style}) {
    return (
        <>
            <Image img={img} alt="photo" className={style} />
        </>
    );
}