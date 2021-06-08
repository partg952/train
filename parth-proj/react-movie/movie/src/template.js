import React from 'react';
import './template.css'
export default function template({ img_url , title}) {
    return (
        <div className="template">
            <img src={'https://image.tmdb.org/t/p/w500'+img_url} />
            <p>{title}</p>
        </div>
    )
}
