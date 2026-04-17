import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../features/skillSlice';

export default function SkillsCoding({list}) {
    const dispatch = useDispatch();

    return (
        <ul>
            {list?.map((item, idx) => 
                <li className='bar' key={idx}>
                    <div className='bar-title'>
                        <span onClick={() => dispatch(add(item.title))}>{item.title}</span>
                        <span>{item.value}</span>
                    </div>
                    <div className='bar-bg'>
                        <div className='bar-value' style={{width:item.width}}></div>
                    </div>
                </li>
            )}
        </ul>
    );
}

