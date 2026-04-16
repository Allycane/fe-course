import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Work from "./Work"
import Testimonials from "../../pages/Testimonials"
import ArrowTop from "./ArrowTop"

export default function Content({data}) {
    // console.log(`Content Data`, data?.work);

    return(
        <>
            <Home data={data?.home}/>
            <About data={data?.about}/>
            <Skills data={data?.skills}/>
            <Work data={data?.work} />
            <Testimonials data={data?.testimonials}/>
            <ArrowTop />
        </>
    )
}