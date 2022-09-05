import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [currentCategory, setCurrentCategory] = useState('about');

  const renderPage = () => {
    switch (currentCategory) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <Header
          currentCategory = {currentCategory}
          setCurrentCategory = {setCurrentCategory}
        ></Header>
      </div>
      <div>
        <main>{renderPage()}</main>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
