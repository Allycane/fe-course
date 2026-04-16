import React from 'react';
import { Title, SubTitle } from './commons/Titles';
import Testimonial from './content/Testimonial';

export default function Testimonials({data}) {
    return (
        <section id="testimonial" className="container">
            <Title title="Testimonial"/>
            <SubTitle subTitle="See What they say about me"/>
            <ul className="testimonials">
                {data?.map((item, idx) => 
                    <li className="testimonial" key={idx}>
                        <Testimonial item={item} />
                    </li>
                )}
            </ul>
        </section>
    );
}

