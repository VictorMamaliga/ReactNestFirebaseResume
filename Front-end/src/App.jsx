// in App.jsx

import React, { useState } from 'react';
import './App.css';
import './styles/main.scss';

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import AddElementModal from './components/AddElementModal';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  let ContentComponent;

  switch (currentPage) {
    case "about":
      ContentComponent = About;
      break;
    case "projects":
      ContentComponent = Projects;
      break;
    case "contact":
      ContentComponent = Contact;
      break;
    case "signin":
      ContentComponent = SignIn;
      break;
    case "home":
    default:
      ContentComponent = Home;
  }

  return (
    <>
      <AddElementModal />
      <Navbar onLinkClick={handlePageChange} />
      <ContentComponent />

    </>
  );
}

export default App;
