import React, { useContext } from 'react';
import './Topic.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Topic({ title, description }) {
    const { currentPalette } = useContext(ThemeContext);

    return (
        <div className="sections-header">
            <h1 id={title}><a style={{ color: currentPalette.black }} href={"#" + title}>{title}</a></h1>
            <p style={{ color: currentPalette.black }}>{description}</p>
        </div>
    );
};