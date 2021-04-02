import './ShowCaseAbout.css';
import { CopyBlock, dracula } from 'react-code-blocks';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

export default function ShowcaseAbout({ title, description }) {
    const { currentPalette } = useContext(ThemeContext);

    const code = `const me = {
    name: "Emanuel Filipe",
    age: 18,
    country: "Brazil",
    email: "efilipecode@gmail.com",
    github: "github.com/eFilipexCode",
    linkedIn: "linkedin.com/in/efilipex",
    loves_coding: true
};
`;
    return (
        <div className="showcaseAbout-container">
            <div className="showcase-texts" style={{ color: currentPalette.black, borderColor: currentPalette.black }}>
                <h1 >{title}</h1>
                <p className="description">{description}</p>
            </div>
            <div className="showcase-code" style={{ borderColor: currentPalette.black }}>
                <CopyBlock theme={dracula} text={code} language="jsx" showtime numbers={false} />
            </div>
        </div>
    );
};
