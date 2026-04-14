import {useState, useEffect} from 'react';
import AvatarList from '../avatar/AvatarList.jsx';
import { fetchData } from '../util/fetch.js';


export default function EffectFetch()   {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0);

    // useEffect는 await async를 직접 붙일 수 없기 때문에
    // useEffect 안에 새로운 함수를 선언하고 그 위에 await async를 붙인다

    useEffect(() => {
        const loadData = async() => {
            const jsonData = await fetchData("http://localhost:5173/data/avatar.json");
            setData(jsonData.alist);
        }
        loadData();
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
            <AvatarList list={data}/>
        </>
    )
}