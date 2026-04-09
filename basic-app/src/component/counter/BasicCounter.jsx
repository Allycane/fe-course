import { useState } from "react";

export default function BasicCounter({click, total}) {
    let [count, setCount] = useState(0);
    let [flag, setFlag] = useState(false);

    // const increamnet = () => {
    //     (count <= 10) ? setCount(count++) : 10;
    // }
    // const decreamnet = () => {
    //     (count >= 0) ? setCount(count--) : 0;
    // }
    // const reset = () => {
    //     setCount(0);
    // }

    const handleCount = (e) => {
        let type = e.target.name;
        // let resetCount = undefined;

        if ( type == "increase" ) {
            if (count < 10) {
                setCount(count+1);
                setFlag(true);
                click(type);
            }
        }
        else if ( type == "decrease" ) {
            if (count > 0) {
                setCount(count-1);
                setFlag(false);
                click(type);
            }
        }
        else {
            click(type, count);
            setCount(0);
            setFlag(false);
        }
    }

    return(
        <div style={{border:'1px solid gray', padding: '10px 50px'}}>
            <h1>React Counter</h1>
            <h2>Counter :: { flag ? <span style={{color:'blue'}}>{count}</span> 
                            : <span style={{color:'red'}}>{count}</span>} / {total}</h2>
            <div>
                <button type="button" onClick={handleCount} name="increase">증가(+)</button>
                <button type="button" onClick={handleCount} name="decrease">감소(-)</button>
                <button type="button" onClick={handleCount} name="reset">초기화</button>
            </div>
        </div>
    );
}

// React Hook - useState
// - virtual DOM 에서 자동으로 상태를 관리하고 업데이트 해준다