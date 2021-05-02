import React, { useContext } from 'react';
import './ContactTab.css';
import { FiGithub, FiLinkedin, FiMail, FiCoffee } from 'react-icons/fi';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';

export default function ContactTab(props) {
    const { currentPalette } = useContext(ThemeContext);
    const { languages, language } = useContext(LanguageContext);

    return (
        <div className="contact-container">
            <a href="https://github.com/eFilipexCode" target="_blank" rel="noreferrer">
                <div className="contact-option">
                    <FiGithub size={60} color={currentPalette.black} />
                    <p style={{ color: currentPalette.black }}>{languages[`${language}`].contactLinks.gb}</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/emanuel-filipe-1599b41a6/" target="_blank" rel="noreferrer">
                <div className="contact-option">
                    <FiLinkedin size={60} color={currentPalette.black} />
                    <p style={{ color: currentPalette.black }}>{languages[`${language}`].contactLinks.lk}</p>
                </div>
            </a>
            <a href="mailto:efilipecode@gmail.com?Subject=Contacting via website" target="_blank" rel="noreferrer">
                <div className="contact-option">
                    <FiMail size={60} color={currentPalette.black} />
                    <p style={{ color: currentPalette.black }}>{languages[`${language}`].contactLinks.em}</p>
                </div>
            </a>
            <a href="https://www.buymeacoffee.com/dimeboyu" target="_blank" rel="noreferrer">
                <div className="contact-option">
                    <FiCoffee size={60} color={currentPalette.black} />
                    <p style={{ color: currentPalette.black }}>{languages[`${language}`].contactLinks.co}</p>
                </div>
            </a>
        </div>
    );
};
