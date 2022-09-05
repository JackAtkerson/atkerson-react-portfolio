import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume/>;

            default:
                return <About />;
        }
    };

    return (
        <div>
            <nav>
                <div>
                    <h1></h1>
                </div>
            </nav>
            <Nav
                currentPage = {currentPage}
                setCurrentPage = {setCurrentPage}
            />
            <main>
                <div>
                    {renderPage(currentPage)}
                </div>
            </main>
        </div>
    )
}

export default Header;