import React, { useContext, useState } from 'react';
import './styles.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { BsFillTriangleFill } from 'react-icons/bs'

function OptionIcon({ isLinkToOtherPage, Icon, title, url, iconObjConfig, skillLevel }) {
    const { currentPalette } = useContext(ThemeContext);
    const [skillLevelState, setSkillLevel] = useState(0);

    function toggleSkillLevel(isMouseOver) {
        isMouseOver === true ? setSkillLevel(skillLevel) : setSkillLevel(0);
    };

    return (
        <div className="option-icon-container" onMouseOver={() => toggleSkillLevel(true)} onMouseLeave={() => toggleSkillLevel(false)}>
            <Icon color={currentPalette.black} {...iconObjConfig} />
            <p style={{ color: currentPalette.black }}>{title}</p>
            <div className="level-bar-container" style={{ background: skillLevelState !== 0 ? currentPalette.secondary : 'transparent' }}>
                <div className="level-bar" style={{ width: skillLevelState !== 0 ? `${skillLevelState}%` : 0, background: iconObjConfig.color }}>
                    <BsFillTriangleFill color={iconObjConfig.color} size={10} className="triangle" />
                </div>
            </div>
        </div>
    );
};

export default OptionIcon;