import React, { useState, useContext } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Language.css';
import { LanguageContext } from '../../contexts/LanguageContext';

const languagesLabels = {
    pt: {
        label: '🇧🇷 Português',
        value: 'pt'
    },
    en: {
        label: '🇺🇸 English',
        value: 'en',
    },
    fr: {
        label: '🇫🇷 Français',
        value: 'fr'
    },
    la: {
        label: '🏴󠁭󠁣󠁳󠁲󠁿 Latine',
        value: 'la'
    },
    // gr: {
    //     label: '🏴󠁭󠁣󠁳󠁲󠁿 Ancient Greek',
    //     value: 'gr'
    // }
};

function Language() {
    const [isOpen, setIsOpen] = useState(false);
    const { currentPalette } = useContext(ThemeContext);
    const { language, setLanguage } = useContext(LanguageContext);

    const handleClick = (item) => {
        setLanguage(languagesLabels[item].value); 
        return setIsOpen(cur => !cur);
    };

    return (
        <div style={{ backgroundColor: currentPalette.primary }} onClick={() => setIsOpen(current => !current)} className="language-container">
            <span>{languagesLabels[`${language}`].label.split(" ")[0]}</span>
            <FiChevronDown color={currentPalette.black} />

            {isOpen && (
                <ul style={{ color: currentPalette.black }} className="languages">
                    {Object.keys(languagesLabels).map(item => {
                        return (
                            languagesLabels[item].value !== language &&
                            <li key={languagesLabels[item].value} onClick={() => handleClick(item)}>
                                <span>{languagesLabels[item].label}</span>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
};

export default Language;