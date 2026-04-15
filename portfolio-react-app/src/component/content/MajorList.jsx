import Major from "./Major"

export default function MajorList({data}) {
    // console.log(`majors data`, data)

    return(
        <>            
            <ul className="majors">
                {data?.map((item, idx) => 
                <li className="major" key={idx}>
                    <Major key={idx} title={item.title} subject={item.subject} icon={item.icon}/>
                </li>
                )}
            </ul>
        </>
    )
}