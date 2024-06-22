import React, { useState, useEffect } from 'react';
import logo from './img/ong_red_0_black.gif';
import img1 from './bg/IMG1.jpg';
import img2 from './bg/IMG2.jpg';
import img3 from './bg/IMG3.jpg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];
  
  return (
    <div className="background" style={{ backgroundImage: `url(${currentImage})` }}>
    <div className="App">
      <p></p>
      <img src={logo} className="App-logo" alt="logo" />
        <br/>
          &copy; 2024
        <br/>
          thehanselong
        <br />
         [dot] com
        <br />
          &nbsp;
      </div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

    <Button variant="contained" sx={{ backgroundColor: 'secondary.main' }}>
      Custom Button
    </Button>



    </div>
  );
}

export default App;
