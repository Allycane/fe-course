import React from 'react';

export default function Menu({href, className, title, click}) {
    return (
        <li>
            <a href={href} className={className} onClick={() => click(title)}>{title}</a>
        </li>
    );
}

