import { Title, SubTitle, TitleDescription } from "../commons/Titles.jsx";
import SkillsContent from "./SkillsContent.jsx";

export default function Skills({data}) {
    const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime impedit in voluptas eum dolore, qui, obcaecati iste sapiente ut amet aliquid ratione voluptatum voluptatem, unde aperiam. Eveniet voluptatum iure assumenda?`;

    // console.log(`Skills Data`, data)

    return(
        <section id="skills" className="container">
            <Title title="My Skills"/>
            <SubTitle subTitle="Skills & Attributes"/>
            <TitleDescription titleDescription={lorem}/>
            <SkillsContent data={data}/>
        </section>
    )
}