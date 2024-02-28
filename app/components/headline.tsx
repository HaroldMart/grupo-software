'use client';

import "./static/css/headline.scss";

export default function Headline({description, title}: {description:string, title:string}) {

    return (
        <div className="headline">
            <h1 className="headline-title">{title}</h1>
            <p className="headline-description">{description}</p>
        </div>
    );
}