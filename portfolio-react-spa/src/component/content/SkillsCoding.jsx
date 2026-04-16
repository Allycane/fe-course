import React from 'react';

export default function SkillsCoding({list}) {
    return (
        <ul>
            {list?.map((item, idx) => 
                <li className='bar' key={idx}>
                    <div className='bar-title'>
                        <span>{item.title}</span>
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

