// src/pages/test.tsx
import React from 'react';
import logo from '../img/ong_red_0_black.gif';


const Home: React.FC = () => {
  return (
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
  );
};

export default Home;
