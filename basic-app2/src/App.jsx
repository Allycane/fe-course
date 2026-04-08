import './App.css'
import AvatarImage from './component/avatar/AvatarImage.jsx';
import Avatar from './component/avatar/Avatar.jsx';
import AvatarImageList from './component/avatar/AvatarImageList.jsx';
import AvatarList from './component/avatar/AvatarList.jsx';
import people1 from './assets/images/people1.webp';
import people2 from './assets/images/people2.webp';
import people3 from './assets/images/people3.webp';
import style from './component/avatar/Avatar.module.css';


function App() {
  const imgList = [
    {"img" : people1},
    {"img" : people3},
    {"img" : people2},
    {"img" : people1}
  ]

  const avatarList = [
    {"img" : people1, "name" : 'Smith'},
    {"img" : people3, "name" : 'James'},
    {"img" : people2, "name" : 'Anne'},
    {"img" : people1, "name" : 'Smith'}
  ]


  return (
    <>
      <AvatarImage img={people3} style={style.avatar_img}/>
      <Avatar name='Smith' img={people1}/>
      <AvatarImageList list={imgList} />
      <AvatarList list={avatarList} />
    </>
  )
}

export default App
