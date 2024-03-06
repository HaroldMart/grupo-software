import clsx from 'clsx';
import '../components/static/css/components/headline.scss';


function Tagline({name}: {name?:string}) {
    return (
        <div className="tagline">
            <label>{name}</label>
        </div>
    );
}

export default function Headline({ title, description, tagline}: {title:string, description?:string, tagline?:string}) {
    return (
        <div className="headline">
            <Tagline name={tagline}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}