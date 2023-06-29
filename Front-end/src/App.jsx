import { useState } from 'react'
import './App.css'
import './styles/main.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
