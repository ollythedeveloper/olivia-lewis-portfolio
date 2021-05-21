import React from 'react';
import logo from './logo-trimmed.jpeg';
import './Footer.css';

export default function Footer() {
    return (
        <div className="App__footer">
            <div className="ft_group">
                <div className="ft_item">
            <img src={logo} alt="OllyLogo" className="logo" />
            </div>
            <div className="ft_item">
            <p>Copyright © 2021</p>
            </div>
            </div>
        </div>
    )
}