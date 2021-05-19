import React from 'react';
import logo from './logo-trimmed.jpeg';
import './Footer.css';

export default function Footer() {
    return (
        <div className="App__footer">
            <p><img src={logo} alt="OllyLogo" className="logo" /></p>
            <p>Copyright © 2021</p>
        </div>
    )
}