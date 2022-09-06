import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Pitcher Perfect',
            image: '../../assets/images/pitcher-perfect.png',
            description: 'An app that will locate breweries in your area',
            repo: 'https://github.com/JackAtkerson/pitcher-perfect',
            link: ''
        },
        {
            name: 'Ship Space',
            image: '../../assets/images/ship-space.png',
            description: 'A website used for logistics',
            repo: 'https://github.com/JackAtkerson/ship-space',
            link: 'https://ship-space.herokuapp.com/'
        },
        {
            name: 'Budget Tracker',
            image: '../../assets/images/',
            description: '',
            repo: '',
            link: ''
        },
        {
            name: 'Run Buddy',
            image: '../../assets/images/run-buddy.png',
            description: '',
            repo: '',
            link: ''
        },
        {
            name: 'Robot Gladiators',
            image: '../../assets/images/robot-gladiators.png',
            description: '',
            repo: '',
            link: ''
        },
        {
            name: 'Horiseon',
            image: '../../assets/images/horiseon.png',
            description: 'Good site',
            repo: '',
            link: ''
        },
    ];

    return (
        <div>
            <p>Portfolio</p>
            <hr />

            <Project projects={projects}></Project>
        </div>
    );
};




export default Portfolio;