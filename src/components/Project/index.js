import React, { useState } from 'react';

function Project(props) {
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const link = currentProject.link;
    const repo = currentProject.repo;

    return (
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-4by3'>
                    <img src={image} alt='Project'></img>
                </figure>
            </div>
            <div className='card-content'>
                <div className='media'>
                    <div className='media-content'>
                        <p className='title is-4'>{name}</p>
                    </div>
                </div>
                <div className='content'>
                    <p>
                        {description}
                    </p>
                    <a href={link} target='_blank' rel='noreferrer'>Deployed Application</a> <a href={repo} target='_blank' rel='noreferrer'>GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default Project;