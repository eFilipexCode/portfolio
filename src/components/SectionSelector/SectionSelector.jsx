import { useContext } from 'react';
import { WebsitesContext } from '../../contexts/WebsitesContext';
import './SectionSelector.css';
import websites from '../../utils/websites.json';

export default function SectionSelector() {
    const {
        setTitle,
        setDescription,
        setImage,
        setLink,
    } = useContext(WebsitesContext);

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
                    <button onClick={() => handleChangeContextData(website)}>
                        {website.title}
                    </button>
                ))}
            </div>
        </div>
    );
};