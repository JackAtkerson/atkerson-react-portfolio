import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Project(props) {
    const currentCategory = {
        name: 'Portfolio',
        description: 'A selection of the websites and applications I have developed'
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
        </section>
    );
}

export default Project;