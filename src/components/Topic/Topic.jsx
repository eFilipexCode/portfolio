import React from 'react';
import './Topic.css';

export default function Topic({ title, description }) {
    return (
        <div className="sections-header">
            <h1 id={title}><a href={"#" + title}>{title}</a></h1>
            <p>{description}</p>
        </div>
    );
};