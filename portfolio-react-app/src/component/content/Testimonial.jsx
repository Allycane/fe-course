import React from 'react';
import AvatarImage from '../commons/AvatarImage';

export default function Testimonial({item}) {

    return (
        <>
            <AvatarImage img={item.img} alt={item.alt} style="testimonial-img"/>

            <div className="testimonial-text"> 
                <p>{item.description}</p>
                <p>
                    <a href="#" className="testimonial-text-name">
                        {item.name}
                    </a>{item.company}
                </p>
            </div>
        </>
    );
}

