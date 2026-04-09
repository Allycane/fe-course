import { useState } from 'react';
import BasicCounter from './component/counter/BasicCounter.jsx';

export default function App() {
    let [totalCount, setTotal] = useState(0); // 자체적인 구조분해 할당

    const receiveResult = (type, count) => {
        // 자식에게 값을 받아서 하나씩 증가
        if ( type == "increase" ){
            setTotal(totalCount + 1);
        }
        else if ( type == "decrease" ){
            setTotal(totalCount - 1);
        }
        else {
            setTotal(totalCount - count);
        }
    }

    return(
        <>
            <h1>[ App Counter ]</h1>
            <h1>Total Count :: <span><b>{totalCount}</b></span></h1>
            <BasicCounter click={receiveResult} total={totalCount}/>
            <BasicCounter click={receiveResult} total={totalCount}/>
            <BasicCounter click={receiveResult} total={totalCount}/>
        </>
    );
}