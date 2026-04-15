import Home from "./Home"
import About from "./About"
import Skills from "./Skills"

export default function Content({data}) {
    // console.log(`Content Data`, data?.skills);

    return(
        <>
            <Home data={data?.home}/>
            <About data={data?.about}/>
            <Skills data={data?.skills}/>
        </>
    )
}