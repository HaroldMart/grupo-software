import "../static/css/components/headline.scss";

export default function Headline({ title, description}: {title:string, description:string}) {
    return (
        <div className="headline">
            <h1 className="headline-title">{title}</h1>
            <p className="headline-description">{description}</p>
        </div>
    );
}