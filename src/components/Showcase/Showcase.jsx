import { useContext } from 'react';
import './Showcase.css';
import { FiArrowUpRight } from 'react-icons/fi';
import { WebsitesContext } from '../../contexts/WebsitesContext';

export default function Showcase() {
    const { title, description, image, link } = useContext(WebsitesContext);

    return (
        <div className="showcase-container">
            <div className="showcase-texts">
                <h1>{title}</h1>
                <p className="description">{description}</p>
            </div>
            <div className="showcase-image">
                <a href={link} target="_blank" rel="noreferrer">
                    <div className="overlay-link">
                        <p>{title} <FiArrowUpRight size={20} color='#fefefe' /></p>
                    </div>
                    <img src={`${image}.PNG`} alt="Website preview" />
                </a>
            </div>
        </div>
    );
};