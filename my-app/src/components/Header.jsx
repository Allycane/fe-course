import img01 from './../assets/Image/img01.png';
import favi from './../assets/Image/stickman.png';
import './Header.css';

export default function Header() {
    return (
        <header className='header'>
            <img src={img01} alt="tree" width={'150px'}/>
            <h1>Header</h1>
        </header>
    );
}
/**
 * public에 이미지를 저장한 채로 불러오는 과정은 브라우저가 큰 이미지를 저장해야 하기 때문에 처리 속도가 저하될 수 있음
 * import를 통해 이미지를 불러오면 자동으로 최적화 하는 기능이 있기 때문에 성능적으로는 이 방법이 추천됨
 *  */