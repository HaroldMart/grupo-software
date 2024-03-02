import '../static/css/components/headline.scss';

export default function Headline({ title, description}: {title:string, description:string}) {
    return (
        <div className="headline">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}