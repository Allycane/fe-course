import AvatarImage from './Avatar_Image.jsx';

export default function AvatarImageList({imgList}) {
    return (
        <div>
            {
                imgList.map((item, idx) =><AvatarImage img={item.img} style={item.style} key={idx}/>)
            }
        </div>
    );
}