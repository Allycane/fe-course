import {useState, useEffect} from 'react';
import AvatarList from '../avatar/AvatarList.jsx';
import people1 from '../../assets/images/people1.webp';
import people2 from '../../assets/images/people2.webp';
import people3 from '../../assets/images/people3.webp';


export default function EffectFetch()   {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0);
    const url = 'http://localhost:5173/data/alist.json';
    // 1. 이미지를 전역에 선언 후 호출하는 경우
    const alist = [
        {"img": people1, "name": "홍길동"},
        {"img": people2, "name": "김철수"},
        {"img": people3, "name": "최영희"}
      ]

      // 2. public에 저장된 이미지를 호출하는 경우
    const blist = [
        {"img": "/people1.webp", "name": "홍길동"},
        {"img": "/people2.webp", "name": "김철수"},
        {"img": "/people3.webp", "name": "최영희"}
      ]

    // useEffect는 await async를 직접 붙일 수 없기 때문에
    // useEffect 안에 새로운 함수를 선언하고 그 위에 await async를 붙인다

    useEffect(() => {
        console.log(`마운트 or 업데이트 시 호출!!`);
        const fetchData = async() => {
            // data = await fetch(url)
            //     .then((response) => response.json())
            //     .then((jsonData) => jsonData) //fetch() 티입이 Promise 반환됨
            //     .catch((error) => console.log(error));

            const response = await fetch(url);
            const jsonData = await response.json();
            // 실제 데이터 리턴
            // useEffect로 받아온 데이터는 useState로 관리하는 것이 좋다
            setData(jsonData);
        }
        fetchData();
    }, [count])
    
    // const data = await fetch(url)
    //     .then((response) => response.json())
    //     .then((jsonData) => jsonData)
    //     .catch((error) => console.log(error));
    // console.log(`data--->`, data)
    // 언제 작업을 종료해야 하는지 알수가 없어서 데이터를 계속 불러오게 됨
    // 이를 useEffect를 이용해 마운트 시에만 불러오게 할 수 있음

    return(
        <>
            <AvatarList list={alist}/>
            <AvatarList list={blist}/>
            <h2>{count}</h2>
            <AvatarList list={data}/>
            <button type="button" onClick={() => setCount(count+1)}>증가 버튼</button>
        </>
    )
}