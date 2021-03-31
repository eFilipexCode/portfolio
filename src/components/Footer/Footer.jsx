import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Footer() {
    const { currentPalette } = useContext(ThemeContext);

    return (
        <div className="footer"  style={{color: currentPalette.black, borderColor: currentPalette.tertiary}}>
            <p>{'</efilipex>'}</p>
        </div>
    );
};