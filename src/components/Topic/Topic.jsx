import React, { useContext } from 'react';
import './Topic.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Topic({ title, description }) {
    const { currentPalette } = useContext(ThemeContext);

    return (
        <div className="sections-header">
            <div className="title-topic-container">
                <h1 id={title}>
                    <span style={{ color: currentPalette.black }} className="hash">#</span>
                    <a style={{ color: currentPalette.black }} href={"#" + title}>{title}</a>
                    <div className="underline-bar" style={{ background: currentPalette.black }}></div>
                </h1>
            </div>
            <p style={{ color: currentPalette.black }}>{description}</p>
        </div>
    );
};