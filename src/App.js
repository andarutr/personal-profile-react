// App.js
import React, { useState } from 'react';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Sertifikat from './components/Sertifikat';
import Contact from './components/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  const cursor = {
    cursor: 'pointer'
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
        <header className="main_header_arae">
        <div className="navbar-area">
            <div className="main-responsive-nav">
                <div className="container">
                    <div className="main-responsive-menu">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/img/logo.webp" alt="logo" width="50" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/img/logo.webp" alt="logo" width="80" />
                        </a>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link click_menu" onClick={() => navigateTo('home')}>Beranda</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click_menu" onClick={() => navigateTo('portfolio')}>Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click_menu" onClick={() => navigateTo('sertifikat') }>Sertifikat</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click_menu" onClick={() => navigateTo('contact') }>Kontak</a>
                                </li>
                            </ul>
                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <a href="assets/CV Andaru Triadi.pdf" class="btn btn_navber">Download CV</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>

      {currentPage === 'home' && <Home />}
      {currentPage === 'portfolio' && <Portfolio />}
      {currentPage === 'sertifikat' && <Sertifikat />}
      {currentPage === 'contact' && <Contact />}
    </div>
  );
};

export default App;
