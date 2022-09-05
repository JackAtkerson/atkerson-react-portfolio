import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Project(props) {
    const [projects] = useState([
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
    ]);

    return (
        <div>
            <h2>Projects</h2>
            <ul className='flex-row'>
                {projects.map((project) => (
                    <li key={project.name}>
                        <img src={project.image} alt={project.alt}></img>
                    </li>
                ))}
        </ul>

        </div>
    );
}

export default Project;