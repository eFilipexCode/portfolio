import React, { useContext } from 'react';
import './ContactTab.css';
import { FiGithub, FiLinkedin, FiMail, FiCoffee } from 'react-icons/fi';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function ContactTab() {
    const { currentPalette } = useContext(ThemeContext);

    return (
        <div className="contact-container">
            <a href="https://github.com/eFilipexCode" target="_blank" rel="noreferrer">
                <div className="contact-option">
                    <FiGithub size={60} color={currentPalette.black} />
                    <p  style={{color: currentPalette.black}}>Follow me on Github 💻</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/emanuel-filipe-1599b41a6/" target="_blank" rel="noreferrer">
                <div className="contact-option">
                    <FiLinkedin size={60} color={currentPalette.black} />
                    <p  style={{color: currentPalette.black}}>Visit my LinkedIn 🔗</p>
                </div>
            </a>
            <a href="mailto:efilipecode@gmail.com?Subject=Contacting via website" target="_blank" rel="noreferrer">
                <div className="contact-option">
                    <FiMail size={60} color={currentPalette.black} />
                    <p  style={{color: currentPalette.black}}>Email me 📩</p>
                </div>
            </a>
            <a href="https://www.buymeacoffee.com/dimeboyu" target="_blank" rel="noreferrer">
                <div className="contact-option">
                    <FiCoffee size={60} color={currentPalette.black} />
                    <p  style={{color: currentPalette.black}}>Would you buy me a coffee? ☕</p>
                </div>
            </a>
        </div>
    );
};
