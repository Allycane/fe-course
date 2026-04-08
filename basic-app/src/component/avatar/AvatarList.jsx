import Avatar from './Avatar.jsx';
import style from './Avatar.module.css';

export default function Avatarlist({list}) {
    return (
        <div className={style.avatarList}>
            {
                list.map((item, idx) => <Avatar img={item.img} name={item.name} key={idx}/>)
            }
        </div>
    );
}
// list의 구조를 분해해서 map으로 돌려야 하므로 구조 분해 할당으로 진행