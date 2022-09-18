import React from 'react';
import Project from '../Project';
import pitcherPerfect from '../../assets/images/pitcher-perfect.png';
import shipSpace from '../../assets/images/ship-space.png';
import clothingStore from '../../assets/images/clothing-store.jpeg';
import budgetTracker from '../../assets/images/budget-tracker.png';
import passwordGenerator from '../../assets/images/password-generator.jpeg';
import horiseon from '../../assets/images/horiseon.png';


function Portfolio() {
    const projects = [
        {
            name: 'Pitcher Perfect',
            image: pitcherPerfect,
            description: 'An app that will locate breweries in your area.',
            repo: 'https://github.com/JackAtkerson/pitcher-perfect',
            link: 'https://jackatkerson.github.io/pitcher-perfect/'
        },
        {
            name: 'Ship Space',
            image: shipSpace,
            description: 'An inventory and warehouse management application.',
            repo: 'https://github.com/JackAtkerson/ship-space',
            link: 'https://ship-space.herokuapp.com/'
        },
        {
            name: 'Clothing Store',
            image: clothingStore,
            description: 'Coming Soon',
            repo: 'https://github.com/JackAtkerson/clothing-store',
            link: ''
        },
        {
            name: 'Budget Tracker',
            image: budgetTracker,
            description: 'A budget tracking tool with a graph to viualize your finances.',
            repo: 'https://github.com/JackAtkerson/atkerson-budget-tracker',
            link: ''
        },
        {
            name: 'Password Generator',
            image: passwordGenerator,
            description: 'An application that generates a random password according to user criteria.',
            repo: 'https://github.com/JackAtkerson/js-password-generator.git',
            link: 'https://jackatkerson.github.io/js-password-generator/'
        },
        {
            name: 'Horiseon',
            image: horiseon,
            description: 'A web development and social media management website',
            repo: 'https://github.com/JackAtkerson/atkerson-challenge-01.git',
            link: 'https://jackatkerson.github.io/atkerson-challenge-01/'
        }
    ];

    return (
        <section>
            <div>
                <h1 className='section-title'>My Portfolio</h1>
            </div>
            <div>
                <ul className='projects-container'>
                    <li>
                        <div className='project'>
                            <Project projects={projects[0]}></Project>
                        </div>
                    </li>
                    <li>
                        <div className='project'>
                            <Project projects={projects[1]}></Project>
                        </div>
                    </li>
                    <li>
                        <div className='project'>
                            <Project projects={projects[2]}></Project>
                        </div>
                    </li>
                </ul>
                <ul className='projects-container'>
                    <li>
                        <div className='project'>
                            <Project projects={projects[3]}></Project>
                        </div>
                    </li>
                    <li>
                        <div className='project'>
                            <Project projects={projects[4]}></Project>
                        </div>
                    </li>
                    <li>
                        <div className='project'>
                            <Project projects={projects[5]}></Project>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Portfolio;