import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function MenuBtn({className}) {
    return (
        // <button class="header-toggle"><i class="fa-solid fa-bars"></i></button>
        <button className={className}>
            <FontAwesomeIcon icon={faBars}/>
        </button>
    );
}

