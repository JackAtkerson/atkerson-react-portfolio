import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
const [currentPage, setCurrentPage] = useState('about');

const renderPage = () => {
  switch (currentPage) {
    case 'about':
      return <About />;
    case 'portfolio':
      return <Portfolio />;
    case 'resume':
      return <Resume />;
    case 'contact':
      return <Contact />;
    default: return null;
  }
};

  return (
    <div>
      <div>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
      </div>
      <div>
        <main>{renderPage()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
