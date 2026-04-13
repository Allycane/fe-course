import {useState, useEffect} from 'react';

export default function EffectCounter() {
    const [count, setCount] = useState(0);
    // const useEffect(()=>{}, []);
    useEffect(()=>{
        console.log(`📖mount & update!!`);
        return () => {
            console.log(`🎈컴포넌트 마운트 시 작업할 내용 호출`);
            console.log(`🎈unmount!!`);
        }
    }, [count]);
    // dependancy 값이 바뀌면 로그를 찍어라
    // 화면에 보이면 mount 보이지 않으면 unmount - 자동으로 진행됨
    /** AppEffect에서 EffectCounter의 표시/비표시를 조절하여
     * EffectCounter의 mount와 unmount를 조절
    */

    return(
        <div style={{width:'200px', textAlign:'center', border:"1px solid green"}}>
            <h1>{count}</h1>
            <button type="button" onClick={() => setCount(count+1)}>증가 (+)</button>
            <button type="button" onClick={() => setCount(count-1)}>감소 (-)</button>
        </div>
    )
}