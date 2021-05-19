import React from 'react';
import myart from './myart-trim.jpeg';
import './About.css';

export default function About() {
    return (
        <div className="App__about">
            <div className="group">

                <div className="item-double">
                    <h2>About Me</h2>
                    <p>I'm all about creating visually appealing software with phenomenal User Experiences.
                        I'm very dynamic and will enjoy working on a variety of projects, big or small.
                        If I can contribute to building something great, count me in!</p>
                    <p>I have many passions; it's refreshing to be in a field that allows me to exercise my strengths.
                        From my experience as a Biomed, I'm great when it comes to problem-solving, tech support, and customer service.
                        As an artist, I understand how important it is that things make sense visually.
                        I enjoy collaborating with others and would love to be part of your team!
                        The services I can provide include making customer-oriented interfaces,
                        resolving broken code, building websites/apps from scratch,
                        and making recommendations/improvements to existing websites/apps.
                    </p>
                    <p>Besides coding, I enjoy dancing, drawing, traveling, and spending quality time with my family.</p>
                    <p><b>Fun facts about me:</b></p>
                    <ul>
                        <li>I like coming up with fun choreography and teaching it to others.</li>
                        <li>I love character design and creating comics in my free time. Check out my <a href="https://www.instagram.com/ollybaby.prod/">Instagram</a>!</li>
                    </ul>
                </div>
                <div class="item">
                    <img src={myart} alt="Some of my drawings" />
                </div>
            </div>
        </div>
    )
}