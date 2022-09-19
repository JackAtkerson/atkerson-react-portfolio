import React from 'react';
import myResume from '../../assets/images/atkerson-resume.png';

function Resume() {
	return (
        <section id="resume" class="section-one">
            <h2 class="section-title">Resume</h2>

            <div className='resume-link'>
                <img src={myResume} alt='Jack Atkerson resume example' className='resume-picture'></img>
                <a href={require('../../assets/images/resume.pdf')} download> 
                    <p>Download my Resume</p>
                </a>
            </div>
            <div className='proficiencies'>
                <div className='prof-list'>
                    <h3>Front-End Proficiencies</h3>
                        <ol>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                            <li>Bulma</li>
                            <li>Handlebars</li>
                        </ol>
                </div>
                <div className='prof-list'>
                    <h3>Back-End Proficiencies</h3>
                        <ol>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>Model View Controller</li>
                            <li>Progressive Web Applications</li>
                            <li>APIs</li>
                        </ol>
                </div>
                <div className='prof-list'>
                    <h3>Database Proficiencies</h3>
                        <ol>
                            <li>MySQL</li>
                            <li>Sequelize</li>
                            <li>NoSQL</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
                        </ol>
                </div>
                <div className='prof-list'>
                    <h3>Dev Tool Proficiencies</h3>
                        <ol>
                            <li>Git</li>
                            <li>npm</li>
                            <li>Chrome DevTools</li>
                            <li>Jest</li>
                            <li>Webpack</li>
                        </ol>
                </div>
            </div>
        </section>  
	);
}

export default Resume;