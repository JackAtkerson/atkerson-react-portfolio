import React, { useState, useEffect } from 'react';

function Nav() {
  const [categories] = useState([
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
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    document.title = (currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
      <h2>
        <a href='/'>Jack Atkerson</a>
      </h2>
      <nav>
        <ul className='flex-row'>
          {categories.map((category) => (
            <li className={`mx-1 ${
              currentCategory.name === category.name && 'navActive'
            }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
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