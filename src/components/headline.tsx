import clsx from 'clsx';
import '../components/static/css/components/headline.scss';


function Tagline({name}: {name?:string}) {
    return (
        <div className="tagline">
            <label>{name}</label>
        </div>
    );
}

export default function Headline({ title, description, tagline, alignment = 'left' }: {title:string, description?:string, tagline?:string, alignment?: 'left' | 'center' | 'right'}) {
    const alignmentClass = `align-${alignment}`;

    return (
        <div className={`headline ${alignmentClass}`}>
            {tagline && <Tagline name={tagline} />}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}