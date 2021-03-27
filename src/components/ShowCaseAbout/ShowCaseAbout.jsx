import './ShowCaseAbout.css';
import { CopyBlock, dracula } from 'react-code-blocks';

export default function ShowcaseAbout({ title, description }) {
    const code = `const me = {
    name: "Emanuel Filipe",
    age: 18,
    country: "Brazil",
    email: "efilipecode@gmail.com",
    github: "https://github.com/eFilipexCode",
    linkedIn: "https://www.linkedin.com/in/efilipex",
    loves_coding: true
};
`;
    return (
        <div className="showcaseAbout-container">
            <div className="showcase-texts">
                <h1>{title}</h1>
                <p className="description">{description}</p>
            </div>
            <div className="showcase-code">
                <CopyBlock theme={dracula} text={code} language="jsx" showLineNumbers />
            </div>
        </div>
    );
};