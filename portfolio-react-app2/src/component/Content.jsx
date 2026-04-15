import React from 'react';
import Home from './Content/Home';

export default function Content({data}) {
    // console.log(`Content --->`, data)
    return (
        <section id="home">
            <Home data={data?.home}/>
        </section>
    );
}

