import React from 'react';

function Nav() {
    const categories = [
        {
            name: 'Portfolio',
            description: 'A selection of the websites and applications I have developed'
        },
        {
            name: 'Resume',
            description: 'My resume, listing my education, expreience, and qualifications'
        }
    ]

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2>
                <a href="/">
                    Jack Atkerson
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className='mx-1'
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;