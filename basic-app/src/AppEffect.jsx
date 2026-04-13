import { useState } from 'react';
import EffectCounter from './component/effects/EffectCounter.jsx';
import EffectFetch from './component/effects/EffectFetch.jsx';

export default function App() {
    const [show,setShow] = useState(true);
    return(
        <>
            {/* { show && <EffectCounter />}
            <button onClick={()=>setShow(!show)}>
                {show? "숨기기" : "표시하기"}
            </button> */}
            <EffectFetch />
        </>
    )
}