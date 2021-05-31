import React from 'react';
import logo from './logo-trimmed.jpeg';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="App__footer">
            <div className="ft_group">
                <div className="ft_item">
                    <img src={logo} alt="OllyLogo" className="logo" />
                </div>
                <div className="ft_item">
                    <p>Copyright</p>
                    <p> ©</p>
                    <p>2021</p>
                </div>
            </div>
        </footer>
    )
}