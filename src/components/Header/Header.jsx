import React, { useState } from 'react';
import './Header.css';
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Header() {
    const [fulltext, setFullText] = useState(false);

    function animateTitleText(mouseover) {
        if (mouseover)
            setFullText(true);
        else
            setFullText(false);
    };

    return (
        <div className="header-container">
            <p onMouseOver={() => animateTitleText(true)} onMouseLeave={() => animateTitleText(false)}>
                <span>ef</span>
                <span
                    className="completed-name"
                    style={{ width: fulltext ? '90px' : '0px', opacity: fulltext ? '1' : '0'}}>ilipe</span>
                <span>x</span>
            </p>
            <div className="contacts-header">
                <a href="https://github.com/eFilipeCode" target="_blank" rel="noreferrer">
                    <FiGithub size={25} />
                </a>
                <a href="https://www.linkedin.com/in/emanuel-filipe-1599b41a6/" target="_blank" rel="noreferrer">
                    <FiLinkedin size={25} />
                </a>
                <a href="mailto:efilipecode@gmail.com?Subject=Contacting via website">
                    <FiMail size={25} />
                </a>
            </div>
        </div>
    );
};