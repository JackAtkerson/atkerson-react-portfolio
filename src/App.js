import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};

  return (
    <div>
      <header>
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </header>
      <div>
        <main>
          {renderTab()}
        </main>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
