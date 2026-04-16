import React from 'react';
import { Title, SubTitle } from '../component/commons/Titles.jsx'
import Categories from '../component/content/Categories.jsx'
import Projects from '../component/content/Projects.jsx'
import { useOutletContext } from 'react-router-dom'

export default function Work() {
    const data = useOutletContext();

    return (
        <section id="mywork" className="section container">
            <Title title="My Work" />
            <SubTitle subTitle="Projects" />
            <Categories categories={data?.work?.categories}/>
            <Projects projects={data?.work?.projects}/>
        </section>
    );
}

