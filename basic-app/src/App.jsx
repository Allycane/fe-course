import AvatarImage from './component/avatar/Avatar_Image.jsx';
import Avatar from './component/avatar/Avatar.jsx';
import AvatarImageList from './component/avatar/AvatarImageList.jsx';
import Avatarlist from './component/avatar/AvatarList.jsx';
import Menu from './component/menu/Menu.jsx';
import people1 from './assets/images/people1.webp';
import people2 from './assets/images/people2.webp';
import people3 from './assets/images/people3.webp';
import style from './component/avatar/Avatar.module.css';


export function App() {
  const list = [
    {"img": people1, "style":style.avatar_img},
    {"img": people2, "style":style.avatar_img},
    {"img": people3, "style":style.avatar_img}
  ]

  const alist = [
    {"img": people1, "name": "Smith"},
    {"img": people2, "name": "Steve"},
    {"img": people3, "name": "Anne"},
    {"img": people1, "name": "Smith"}
  ]
  return (
    <>
      {/* <Menu title='네이버' domain="http://www.naver.com" style={style.menu1}/>
      <Menu title='구글' domain="http://www.google.com" style={style.menu2}/>
      <Menu title='다음' domain="http://www.daum.net" style={style.menu1}/> */}

        <AvatarImage img={people1} style={style.avatar_img}/>
        <Avatar name='Annie' img={people3}/>
        <AvatarImageList imgList={list} />
        <Avatarlist list={alist} />
    </>
  )
}

export default App
