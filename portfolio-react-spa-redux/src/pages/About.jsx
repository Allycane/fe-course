import { Title, Description } from "../component/commons/Titles.jsx";
import MajorList from "../component/content/MajorList.jsx"
import JobList from "../component/content/JobList.jsx"
import { useOutletContext } from "react-router-dom";

export default function About() {
    // console.log(`About Data`, data)
    const {data} = useOutletContext();

    return(
        <>
            <section id="about" className="section container">
                <Title title="About me" />
                <Description description={data?.about?.lorem} />
                <MajorList data={data?.about?.majors}/>
                <JobList data={data?.about?.jobs}/>
            </section>
        </>
    )
}