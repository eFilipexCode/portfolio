import { useContext } from 'react';
import './Showcase.css';
import { FiArrowUpRight } from 'react-icons/fi';
import { WebsitesContext } from '../../contexts/WebsitesContext';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Showcase() {
    const { title, description, image, link } = useContext(WebsitesContext);
    const { currentPalette } = useContext(ThemeContext);

    return (
        <div className="showcase-container">
            <div className="showcase-texts" style={{ borderColor: currentPalette.black }}>
                <h1 style={{ color: currentPalette.black }}>{title}</h1>
                <p style={{ color: currentPalette.black }} className="description">{description}</p>
            </div>
            <a href={link} style={{ borderColor: currentPalette.black }} target="_blank" rel="noreferrer">
                <div className="showcase-image" style={{ backgroundImage: `url(${image})`, borderColor: currentPalette.black }}>
                    <div className="overlay-link" >
                        <p>{title} <FiArrowUpRight size={20} color='#fefefe' /></p>
                    </div>
                </div>
            </a>
        </div>
    );
};
