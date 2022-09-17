import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <header>
            <div>
                <h2>Jack Atkerson</h2>
            </div>
            <div>
                <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
            </div>
        </header>
    );
}

export default Header;