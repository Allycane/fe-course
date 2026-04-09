import Logo from './commons/Logo.jsx';
import Image from './commons/Image.jsx';
import people1 from './assets/images/people1.webp';
import people2 from './assets/images/people2.webp';
import people3 from './assets/images/people3.webp';

export default function App() {
    return(
        <>
            <Logo img="https://www.lottecinema.co.kr/NLCHS/Content/images/common/logo_footer.gif" alt="Lotte_Logo" w="300px" h="50px"/>
            <Logo img="https://cdn.cgv.co.kr/cgvpomscontent/ips/unitCnts/2025/1114/4c8da3708290405bb6400a6a553cade2.svg" alt="CGV_Logo" w="300px" h="50px"/>

            <Image img={people1} alt="프로필사진" w="180px" h="200px" />
            <Image img={people2} alt="프로필사진" w="180px" h="200px" />
            <Image img="https://cf2.lottecinema.co.kr/lotte_image/2026/Normal/Normal_1920774.jpg" alt="노멀 영화포스터" w="100%" h="" />
        </>
    );
}