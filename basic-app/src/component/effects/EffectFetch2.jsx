import { useEffect, useState } from 'react';
import AvatarImageList from './../avatar/AvatarImageList.jsx';
import style from './../avatar/Avatar.module.css';
import { fetchData } from './../util/fetch.js';

export default function EffectFetch2() {
    const [data, setData] = useState([]); // Json의 배열 데이터를 받아야 하기 때문에 빈 배열을 초기값으로 설정
    // useEffect(()=>{}, []) // [] 내의 값이 바뀌면 콜백함수에 적용하겠다. [] 내가 비어있다면 딱 한번만 불러오겠다

    useEffect(()=>{
        // 비동기 객체를 호출하는 하나의 모듈로서 생성하여 호출&사용하는 것이 가능하다
        // const fetchData = async() => {
        //     const response = await fetch("http://localhost:5173/data/list.json");
        //     const jsonData = await response.json();
        //     setData(jsonData);
        // }
// -----------------------------------------------------------------------------------------------------------
        // fetch는 Promise객체
        // fetch("http://localhost:5173/data/list.json")
        //     .then((response) => response.json())
        //     .then((jsonData) => setData(jsonData))
        //     .catch((error) => console.log(error));
    // await는 비동기에게 기다리라는 명령을 내리는 명령어지만 useEffect는 랜더링할때 바로 실행해야 하기 때문에 await를 사용할 수 없다. ( 비동기로 처리할 수 없음 )
    /**useEffect 내에 async 함수를 새로 선언하는 것이 효율적이다 */
// -----------------------------------------------------------------------------------------------------------
        const loadFetch = async() => {
            const jsonData = await fetchData("http://localhost:5173/data/avatar.json");
            const newList = jsonData.list.map((item) => ({
                ...item, style:style.avatar_img_circle
            }));
            // map으로 새로운 배열을 생성하고, 그 배열 내에 {item, style:...} 형태의 객체를 생성해준 과정
            // console.log(newList);
            setData(newList);
        }
        /**자기 자신을 호출하는 함수 = 재귀함수 - 무한 루프가 실행된다 - 불러온 함수와 이름을 다르게 할 필요가 있다*/ 

        loadFetch();
    }, [])

    console.log(data);
    
    return(
        <>
            <AvatarImageList imgList={data}/>
        </>
    );
}