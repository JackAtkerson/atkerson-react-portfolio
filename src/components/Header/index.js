import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio'
import Resume from '../Resume';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About': return <About></About>;
            case 'Portfolio': return <Portfolio></Portfolio>;
            case 'Resume': return <Resume></Resume>;
            case 'Contact': return <Contact></Contact>;
            default: return <About></About>;
        }
    }

    return (
        <div>
            <nav>
                <div>
                    <a
                        className='navbar-item'
                        rel='noreferrer'
                        target='_blank'
                        href='https://github.com/JackAtkerson?tab=repositories'
                    >
                        <span>Jack Atkerson</span>
                    </a>
                </div>
            </nav>
            <Nav
                currentPage = {currentPage}
                handlePageChange = {handlePageChange}
            />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;