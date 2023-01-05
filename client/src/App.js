import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
