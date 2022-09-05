import React from 'react';
import Project from '../Project';

const projects = [
    {
        name: 'Horiseon',
        image: '',
        description: '',
        repo: '',
        link: ''
    },
    {
        name: 'Pitcher Perfect',
        image: '',
        description: '',
        repo: '',
        link: ''
    },
    {
        name: 'Ship Space',
        image: '',
        description: '',
        repo: '',
        link: ''
    },
    {
        name: 'Run Buddy',
        image: '',
        description: '',
        repo: '',
        link: ''
    },
    {
        name: 'Robot Gladiators',
        image: '',
        description: '',
        repo: '',
        link: ''
    },
    {
        name: 'Budget Tracker',
        image: '',
        description: '',
        repo: '',
        link: ''
    },
    {
        name: 'Password Generator',
        image: '',
        description: '',
        repo: '',
        link: ''
    },
    {
        name: 'README Generator',
        image: '',
        description: '',
        repo: '',
        link: ''
    }
];

function Portfolio() {
    return (
        <div>
            <h3>Portfolio</h3>
            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;