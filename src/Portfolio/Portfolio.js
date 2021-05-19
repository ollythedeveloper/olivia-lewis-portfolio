import React from 'react';
import prg from './prg-trimmed.png';
import sense8 from './sense8-quiz-landing.png';
import intMe from './iM-landing-page1.png';
import appImgFill from './appimg-fill.jpg';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <div className="App__portfolio">
            <h2>My Portfolio</h2>

            <div className="group">
                <div className="item">
                    <h3>Sense8 Quiz App</h3>
                    <img src={sense8} alt="S8 Quiz Landing Page" />
                    <p>This is a quiz app about the characters from the TV show Sense8.</p>
                    <p>I used HTML, CSS, and Javascript.</p>
                    <p><a href="https://github.com/ollythedeveloper/sense8-quiz" rel="noreferrer" target="_blank">GitHub Repo</a></p>
                    <p><a href="https://ollythedeveloper.github.io/sense8-quiz/" rel="noreferrer" target="_blank">Live App</a></p>
                </div>

                <div class="item">
                    <h3>Pose Reference Generator App</h3>
                    <img src={prg} alt="PRG Landing Page" />
                    <p>This App helps users see reference images and 'how-to-draw' videos for specific poses.</p> 
                    <p>I used HTML, CSS, Javascript, and jQuery.</p>
                    <p><a href="https://github.com/ollythedeveloper/PoseRefGen" rel="noreferrer" target="_blank">GitHub Repo</a></p>
                    <p><a href="https://ollythedeveloper.github.io/PoseRefGen/" rel="noreferrer" target="_blank">Live App</a></p>
                </div>
            </div>

            <div className="group">
                <div class="item">
                    <h3>Interview Me App</h3>
                    <img src={intMe} alt="IntMe Landing Page" />
                    <p>This App helps to prepare Job Seekers(Users) for interviews by prompting them with interview questions. 
                        The User will be able to video-record then review their responses.
                    </p>
                    <p>I used HTML, CSS, Javascript, jQuery, React, Node, Express, and PostgreSQL.</p>
                    <p><a href="https://github.com/ollythedeveloper/interview-me" rel="noreferrer" target="_blank">GitHub Repo</a></p>
                    <p><a href="https://interview-me.vercel.app/" rel="noreferrer" target="_blank">Live App</a></p>
                </div>

                <div class="item">
                    <h3>Fashion Fits</h3>
                    <img src={appImgFill} alt="filler" />
                    <p>Description of Fashion Fits App.</p> 
                    <p>I used HTML, CSS, Javascript, jQuery, React, Node, Express, and PostgreSQL.</p>
                    <p><a href="https://github.com/ollythedeveloper/fashion-fits" rel="noreferrer" target="_blank">GitHub Repo</a></p>
                    <p><a href="https://fashion-fits.vercel.app/" rel="noreferrer" target="_blank">Live App</a></p>
                </div>
            </div>
           
        </div>
    )
}