import React from 'react';
import { Title, SubTitle } from '../component/commons/Titles';
import Testimonial from '../component/content/Testimonial';
import { useOutletContext } from 'react-router-dom';

export default function Testimonials() {
    const data = useOutletContext();

    return (
        <section id="testimonial" className="container">
            <Title title="Testimonial"/>
            <SubTitle subTitle="See What they say about me"/>
            <ul className="testimonials">
                {data?.testimonials?.map((item, idx) => 
                    <li className="testimonial" key={idx}>
                        <Testimonial item={item} />
                    </li>
                )}
            </ul>
        </section>
    );
}

