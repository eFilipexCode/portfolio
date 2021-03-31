import { useContext } from 'react';
import { WebsitesContext } from '../../contexts/WebsitesContext';
import './SectionSelector.css';
import websites from '../../utils/websites.json';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function SectionSelector() {
    const {
        setTitle,
        setDescription,
        setImage,
        setLink,
    } = useContext(WebsitesContext);

    const { currentPalette } = useContext(ThemeContext);

    function handleChangeContextData({ title, link, imageUrl, description }) {
        setTitle(title);
        setDescription(description);
        setImage(imageUrl);
        setLink(link);
    };

    return (
        <div className="sections-container">
            <div className="project-buttons">
                {[...websites].map(website => (
                    <button style={{ borderColor: currentPalette.tertiary, color: currentPalette.black, background: currentPalette.secondary }} onClick={() => handleChangeContextData(website)}>
                        {website.title}
                    </button>
                ))}
            </div>
        </div>
    );
};