import React, { useState } from 'react';

function Project(props) {
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const link = currentProject.link;
    const repo = currentProject.repo;

    return (
        <div className="column is-10">
            <h3>{name}</h3>
            <p>{description}</p>
            <img alt=''>{image}</img>
            <a href={link}>Deployed Application</a>
            <a href={repo}>GitHub Repo</a>
        </div>
        
    );
}

export default Project;