import React from 'react';
import pawHeartIcon from '../assets/paw-heart.svg';

export default function Header() {
    return (
        <header>
            <span className="icon-text">
                <figure className="image is-64x64">
                    <img src={pawHeartIcon} alt="Paw heart icon" />
                </figure>
                <span className="app-name title is-1 p-2">HEALTHY PAWS</span>
            </span>
        </header>    
    );
}
