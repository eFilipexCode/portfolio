import React, { useState, useContext } from 'react';
import './Header.css';
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Header() {
    const [fulltext, setFullText] = useState(false);
    const { currentPalette, toggleTheme, theme } = useContext(ThemeContext);

    function animateTitleText(mouseover) {
        if (mouseover)
            setFullText(true);
        else
            setFullText(false);
    };

    return (
        <header className="header-container">
            <p style={{color: currentPalette.black}} onMouseOver={() => animateTitleText(true)} onMouseLeave={() => animateTitleText(false)}>
                <span>{'<ef'}</span>
                <span
                    className="completed-name"
                    style={{ width: fulltext ? '90px' : '0px', opacity: fulltext ? '1' : '0' }}>ilipe</span>
                <span>{'x>'}</span>
            </p>
            <div className="contacts-header">
                <div onClick={() => toggleTheme(theme)} className="toggle-theme-container" style={{ background: currentPalette.tertiary }}>
                    <input className="toggle-theme-button" type="checkbox" />
                    <div className="index" style={{
                        background: currentPalette.secondary,
                        left: theme === 'light' ? 0 : 25
                    }}>
                        {
                            theme === 'light' ? (<FiSun size={17} className="spin" color='#151515' />) : <FiMoon size={17} className="spin" color='#ddd' />
                        }
                    </div>
                </div>
                <a href="https://github.com/eFilipeCode" style={{ color: currentPalette.black }} target="_blank" rel="noreferrer">
                    <FiGithub size={25} />
                </a>
                <a href="https://www.linkedin.com/in/emanuel-filipe-1599b41a6/" style={{ color: currentPalette.black }} target="_blank" rel="noreferrer">
                    <FiLinkedin size={25} />
                </a>
                <a href="mailto:efilipecode@gmail.com?Subject=Contacting via website" style={{ color: currentPalette.black }}>
                    <FiMail size={25} />
                </a>
            </div>
        </header>
    );
};