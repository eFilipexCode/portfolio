import './ShowCaseAbout.css';

export default function ShowcaseAbout({ title, description }) {
    return (
        <div className="showcaseAbout-container">
            <div className="showcase-texts">
                <h1>{title}</h1>
                <p className="description">{description}</p>
            </div>
            <div className="showcase-image">
                <img src='/emanuel.PNG' alt="emanuel.json" />
            </div>
        </div>
    );
};