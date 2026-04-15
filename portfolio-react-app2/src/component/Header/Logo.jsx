import React from 'react';
import Image from '../commons/Image';

export default function Logo({img, alt, className}) {
    return (
        <div className='header-logo'>
            <Image img={img} alt={alt} className={className}/>
            <h1 className='header-logo-title'>Judy</h1>
        </div>
    );
}

