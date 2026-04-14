import { useState } from 'react';
// import EffectCounter from './component/effects/EffectCounter.jsx';
import EffectFetch from './component/effects/EffectFetch.jsx';
import EffectFetch2 from './component/effects/EffectFetch2.jsx';

export default function App() {
    const [show,setShow] = useState(true);
    return(
        <>
            {/* { show && <EffectCounter />}
            <button onClick={()=>setShow(!show)}>
                {show? "숨기기" : "표시하기"}
            </button> */}
            <EffectFetch2 />
            <EffectFetch />
        </>
    )
}