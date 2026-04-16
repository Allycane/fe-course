import AvatarImage from "../commons/AvatarImage"

export default function Job({img, alt, job, period}) {
    return(
        <>
            <img src={img} alt={alt}/>
            <div>
                <p className="job-name">{job}</p>
                <p className="job-period">{period}</p>
            </div>
        </>
    )
}