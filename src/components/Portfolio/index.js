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
        <section className='tile is-ancestor'>
            <div className='tile is-vertical is-parent'>
                <div className='tile is-child is-4'>
                    <h2>Name1</h2>
                    <img src='../../assets/images/ship-space' alt='Ship Space Homepage'></img>
                </div>
                <div className='tile is-child is-4'>
                    <h2>Name2</h2>
                </div>
            </div>
            <div className='tile is-vertical is-parent'>
                <div className='tile is-child is-4'>
                    <h2>Name1</h2>
                </div>
                <div className='tile is-child is-4'>
                    <h2>Name2</h2>
                </div>
            </div>
            <div className='tile is-vertical is-parent'>
                <div className='tile is-child is-4'>
                    <h2>Name1</h2>
                </div>
                <div className='tile is-child is-4'>
                    <h2>Name2</h2>
                </div>
            </div>
        </section>
    );


};




export default Portfolio;
/*
<div>
<p>Portfolio</p>
<hr />

<Project projects={projects}></Project>
</div> */
