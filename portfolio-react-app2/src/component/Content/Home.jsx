import React from 'react';
import Image from '../commons/Image';

export default function Home({data}) {
    // console.log(`Home --->`, data)
    return (
        <section id="home">
            <Image img={data?.img} alt={data?.alt} className="home-avatar" />

            <h2 className="home-title">
                Hello <br/>
                I'm <strong class="home-title-strong">{data?.title}</strong>, 
                {data?.name}
            </h2>

            <p class="home-description">{data?.description}</p>

            {/* <Menu href={data?.href} className="home-contact" title={data?.menuName}/> */}
        </section>
    );
}

