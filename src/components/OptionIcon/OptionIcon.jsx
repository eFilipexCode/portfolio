import React, { useContext, useState } from 'react';
import './styles.css';
import { ThemeContext } from '../../contexts/ThemeContext';

function OptionIcon({ isLinkToOtherPage, Icon, title, url, iconObjConfig, skillLevel }) {
    const { currentPalette } = useContext(ThemeContext);
    const [skillLevelState, setSkillLevel] = useState(0);

    function toggleSkillLevel(isMouseOver) {
        isMouseOver ? setSkillLevel(skillLevel) : setSkillLevel(0);
    };

    return (
        isLinkToOtherPage === true ?
            (<a href={url} target="_blank" rel="noreferrer">
                <div className="option-icon-container" onMouseOver={() => toggleSkillLevel(true)} onMouseLeave={() => toggleSkillLevel(false)}>
                    <Icon {...iconObjConfig} />
                    <p style={{ color: currentPalette.black }}>{title}</p>
                    <div className="level-bar" style={{ width: `${skillLevel}%` }} />
                </div>
            </a>)
            :
            (<div className="option-icon-container" onMouseOver={() => toggleSkillLevel(true)} onMouseLeave={() => toggleSkillLevel(false)}>
                <Icon color={currentPalette.black} {...iconObjConfig} />
                <p style={{ color: currentPalette.black }}>{title}</p>
                <div className="level-bar" style={{ width: skillLevel !== 0 && `${skillLevelState}%`, background: iconObjConfig.color }} />
            </div>)
    );
};

export default OptionIcon;