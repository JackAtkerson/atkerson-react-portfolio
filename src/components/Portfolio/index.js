import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Horiseon',
            image: '',
            alt: '',
            description: '',
            repo: '',
            link: ''
        },
        {
            name: 'Pitcher Perfect',
            image: '',
            alt: '',
            description: '',
            repo: '',
            link: ''
        },
        {
            name: 'Ship Space',
            image: '',
            alt: '',
            description: '',
            repo: '',
            link: ''
        },
        {
            name: 'Run Buddy',
            image: '',
            alt: '',
            description: '',
            repo: '',
            link: ''
        },
        {
            name: 'Robot Gladiators',
            image: '',
            alt: '',
            description: '',
            repo: '',
            link: ''
        },
        {
            name: 'Budget Tracker',
            image: '',
            alt: '',
            description: '',
            repo: '',
            link: ''
        },
        {
            name: 'Password Generator',
            image: '',
            alt: '',
            description: '',
            repo: '',
            link: ''
        },
        {
            name: 'README Generator',
            image: '',
            alt: '',
            description: '',
            repo: '',
            link: ''
        }
    ];

    return (
        <section>
            <div className='center'>
                <h1>Portfolio</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[1]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[2]}></Project>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Project projects={projects[3]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[4]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Project projects={projects[6]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[7]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    );
};




export default Portfolio;