import React, { useState, useEffect } from 'react';
import img1 from './bg/IMG1.jpg';
import img2 from './bg/IMG2.jpg';
import img3 from './bg/IMG3.jpg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestPage from './pages/test';
import { Button } from '@mui/material';


const images: string[] = [
  img1,
  img2,
  img3
];

const App: React.FC = () => {

  // Code for looping borrowed from ChatGPT-4o
  // Took some effort to get it to work the way I want it, but it's a learning experience.
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Active setter for message
  const [message, setMessage] = useState<String> ("Something message");

  // Active setter for page to show
  const [activePage, setActivePage] = useState<String>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  var handleClick = () => {
    setActivePage("test");
  };

  return (
    <div className="background" style={{ backgroundImage: `url(${currentImage})` }}>
      <Router>
      <Routes>
        <Route path="/" element={activePage === "test" ? <TestPage /> : <Home />} />
      </Routes>
    </Router>

    <Button onClick={handleClick} variant="contained" sx={{ backgroundColor: 'secondary.main' }}>
      {message}
    </Button>



    </div>
  );
}

export default App;
