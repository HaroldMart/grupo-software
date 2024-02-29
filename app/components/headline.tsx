'use client';

import { sofia_sans, inter, krub} from '../utils/fonts';
import "../static/css/components/headline.scss";


export default function Headline({description, title}: {description:string, title:string}) {
    return (
        <div className="headline">
            <h1 className={`headline-title ${inter.className}`}>{title}</h1>
            <p className="headline-description">{description}</p>
        </div>
    );
}