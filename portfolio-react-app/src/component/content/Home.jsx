import AvatarImage from "../commons/AvatarImage"
import Menu from "../commons/Menu"

export default function Home({data}) {
    // console.log(`home data`, data)

    return(
        <section id="home">
            <AvatarImage img={data?.img} alt={data?.alt} style="home-avatar"/>
            {/* <img src="images/favicon.ico" alt="photo" class="home-avatar"/> */}

            <h2 className="home-title">
                Hello <br/>
                I'm <strong class="home-title-strong">{data?.title}</strong>, 
                {data?.name}
            </h2>
            <p className="home-description">{data?.description}</p>

            <Menu href={data?.href} style="home-contact" name={data?.menuName}/>
        </section>
    )
}