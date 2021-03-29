import React from 'react';
import './ContactTab.css';
import { FiGithub, FiLinkedin, FiMail, FiCoffee } from 'react-icons/fi';

export default function ContactTab() {
    return (
        <div className="contact-container">
            <a href="https://github.com/eFilipexCode" target="_blank">
                <div className="contact-option">
                    <FiGithub size={60} color="#151515" />
                    <p>Follow me on Github 💻</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/emanuel-filipe-1599b41a6/" target="_blank">
                <div className="contact-option">
                    <FiLinkedin size={60} color="#151515" />
                    <p>Visit my LinkedIn 🔗</p>
                </div>
            </a>
            <a href="mailto:efilipecode@gmail.com?Subject=Contacting via website" target="_blank">
                <div className="contact-option">
                    <FiMail size={60} color="#151515" />
                    <p>Email me 📩</p>
                </div>
            </a>
            <a href="https://www.buymeacoffee.com/dimeboyu" target="_blank">
                <div className="contact-option">
                    <FiCoffee size={60} color="#151515" />
                    <p>Would you buy me a coffee? ☕</p>
                </div>
            </a>
        </div>
    );
};
