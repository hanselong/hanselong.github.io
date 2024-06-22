import React, { useState, useEffect } from 'react';
import img1 from './bg/IMG1.jpg';
import img2 from './bg/IMG2.jpg';
import img3 from './bg/IMG3.jpg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestPage from './pages/test';
import Tab from './components/Tab';
import TabPanel from './components/TabPanel';
import TabsList from './components/TabsList';
import { Tabs } from '@mui/base/Tabs';
import HomeIcon from '@mui/icons-material/Home';

const images: string[] = [
  img1,
  img2,
  img3
];

const App: React.FC = () => {

  // Creates a setter for image index that can be updated on the fly.
  // type "number" with default value of 0
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

    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}> {<HomeIcon />} </Tab>
        <Tab value={1}>Software Industry</Tab>
        <Tab value={2}>Computer Science</Tab>
        <Tab value={3}>Snow Sports</Tab>
      </TabsList>
      <TabPanel value={0}>Home</TabPanel>
      <TabPanel value={1}><Router> <Routes> <Route path="/" element={<TestPage /> } /> </Routes> </Router></TabPanel>
      <TabPanel value={2}><Router> <Routes> <Route path="/" element={<Home /> } /> </Routes> </Router></TabPanel>
      <TabPanel value={3}>Snow Sports</TabPanel>
    </Tabs>

    </div>
  );
}

export default App;
