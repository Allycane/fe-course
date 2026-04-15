import Job from "./Job"

export default function JobList({data}) {
    return(
        <ul class="jobs">
            {data?.map((item, idx) => 
            <li className="job" key={idx}>
                <Job img={item.img} alt={item.alt} job={item.job} period={item.period}/>
            </li>
            )}
        </ul>
    )
}