import React from 'react';
import { Title, SubTitle } from '../commons/Titles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer({data}) {
    // console.log(`footer data ---`, data);
    return (
        <>
            <footer id="contact" className="footer">
                <Title title="Let's talk"/>
                <SubTitle subTitle="jeon.developer.judy@gmail.com"/>
                <ul className="contact-links">
                    {data?.icons.map((item, idx)=>
                        <li key={idx}>
                            <a href={item.href} className="contact-link"></a>
                            {item.icon === "github" && <FontAwesomeIcon icon={faGithub}/>}
                            {item.icon === "linkedin" && <FontAwesomeIcon icon={faLinkedinIn}/>}
                        </li>
                    )}
                </ul>

                <p>{data?.description}</p>
            </footer>
        </>
    );
}