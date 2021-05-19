import React from 'react';
import funpic from './funpic.jpg';
import './Home.css';

export default function Home() {
    return (
        <div className="Home">
            <div className="group">
                <div className="item">
                    <img src={funpic} alt="Profile Pic" />
                </div>
                <div className="item-double">
                    <h2>Hello! I'm Olivia Lewis.</h2>
                    <h3>(<i>aka</i> <strong>Olly-the-Developer</strong>)</h3>
                    <p>I'm a Fullstack Developer based in Tampa, FL.</p>
                    <p>I became a Biomedical Technician through the United States Army.
                        After doing that for 6+ years, I decided I wanted a career that would combine my technical side with my creative side.
                        That's when I discovered Software Engineering.</p>
                    <p>Now I'm a student at <strong>Thinkful</strong>, and couldn't be happier!
                        I've enjoyed what I have learned so far.
                        I'm excited to build my skills and become a well-rounded developer.</p>
                </div>
            </div>
        </div>
    )
}