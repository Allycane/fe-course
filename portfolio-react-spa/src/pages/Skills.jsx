import { Title, SubTitle, TitleDescription } from "../component/commons/Titles.jsx";
import SkillsContent from '../component/content/SkillsContent.jsx'
import { useOutletContext } from "react-router-dom";

export default function Skills() {
    const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime impedit in voluptas eum dolore, qui, obcaecati iste sapiente ut amet aliquid ratione voluptatum voluptatem, unde aperiam. Eveniet voluptatum iure assumenda?`;

    const data = useOutletContext();

    // console.log(`Skills Data`, data)

    return(
        <section id="skills" className="container">
            <Title title="My Skills"/>
            <SubTitle subTitle="Skills & Attributes"/>
            <TitleDescription titleDescription={lorem}/>
            <SkillsContent data={data?.skills}/>
        </section>
    )
}