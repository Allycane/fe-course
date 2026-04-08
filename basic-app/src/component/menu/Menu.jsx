// import style from './Menu.module.css';

export default function Menu({title, domain, style}) {
    return (
        <a href={domain} className={style}>{title}</a>
        // css가 적용된 내용에 인라인 스타일은 적용되지 않음 -> 에러발생
    );
}