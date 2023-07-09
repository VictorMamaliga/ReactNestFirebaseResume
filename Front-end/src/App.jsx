// in App.jsx

import React, { useState } from 'react';
import './App.css';
import './styles/main.scss';

import Home from './components/home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import AddElementModal from './components/AddElementModal';
import ProjectModal from './components/ProjectModal';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  let ContentComponent;

  switch (currentPage) {
    case "about":
      ContentComponent = About;
      break;
    case "projects":
      ContentComponent = ProjectModal;
      break;
    case "contact":
      ContentComponent = Contact;
      break;
    case "signin":
      ContentComponent = SignIn;
      break;
    case "Home":
    default:
      ContentComponent = Home;
  }

  return (
    <>
      
      <Navbar onLinkClick={handlePageChange} />
      <ContentComponent />

    </>
  );
}

export default App;
