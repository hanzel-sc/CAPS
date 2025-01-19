import React from 'react';
import './card.css';

function Card({ title, description, extrainfo, image }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <p className="card-extra-info">{extrainfo}</p>
        </div>
    );
}

export default Card;