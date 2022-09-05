import React from 'react';

function Nav() {
  const categories = [
    {
      name: 'About',
      description: 'All about me'
    },
    {
        name: 'Portfolio',
        description: 'The work I have done'
    },
    {
        name: 'Resume',
        description: 'My resume'
    },
    {
        name: 'Contact',
        description: 'Reach out to me'
    }
  ]

  return (
    <header>
      <h2>
        <a href='/'>Jack Atkerson</a>
      </h2>
      <nav>
        <ul className='flex-row'>
          {categories.map((category) => (
            <li className='mx-1' key={category.name}>
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;