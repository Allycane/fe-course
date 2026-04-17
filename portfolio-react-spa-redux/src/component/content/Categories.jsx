import React, { useState } from 'react';

export default function Categories({categories}) {
    const [category, setCategory] = useState('All');
    // console.log(`category====`, category);
    

    return (
        <ul className="categories">
            { categories?.map((item, idx) => 
                <li key={idx}>
                    {
                        category === item.category ?
                        <button className="category-btn active" onMouseOver={() => setCategory(item.category)}>{item.category}
                            <span className="category-count">{item.count}</span>
                        </button>
                        :
                        <button className="category-btn" onMouseOver={() => setCategory(item.category)}>{item.category}
                            <span className="category-count">{item.count}</span>
                        </button>
                    }
                </li>            
            ) }
        </ul>
    );
}
