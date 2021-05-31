import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return (
        <nav className="App__nav">
            <header className="Nav_head">
                <h1>Olivia Lewis</h1>
            </header>
            <div className="Nav__options">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}