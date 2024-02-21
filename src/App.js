// App.js
import React, { useState, useEffect } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = window.innerHeight;
      const nextPageThreshold = currentPage * pageHeight;

      if (scrollPosition >= nextPageThreshold) {
        setCurrentPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  return (
    <div className="App">
      <div className="pages-container">
        <div className={`page page-${currentPage === 1 ? 'active' : 'hidden'}`}>
          <Page1 />
        </div>
        <div className={`page page-${currentPage === 2 ? 'active' : 'hidden'}`}>
          <Page2 />
        </div>
        <div className={`page page-${currentPage === 3 ? 'active' : 'hidden'}`}>
          <Page3 />
        </div>
      </div>
    </div>
  );
}

export default App;
