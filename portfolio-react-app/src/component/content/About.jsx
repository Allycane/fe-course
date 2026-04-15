import { Title, Description } from "../commons/Titles";
import MajorList from "./MajorList";
import JobList from "./JobList";

export default function About({data}) {
    // console.log(`About Data`, data)
    return(
        <>
            <section id="about" className="section container">
                <Title title="About me" />
                <Description description={data?.lorem} />
                <MajorList data={data?.majors}/>
                <JobList data={data?.jobs}/>
            </section>
        </>
    )
}