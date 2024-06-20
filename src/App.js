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
        <header class="main_header_arae">
        <div class="navbar-area">
            <div class="main-responsive-nav">
                <div class="container">
                    <div class="main-responsive-menu">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/img/logo.webp" alt="logo" width="50" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-navbar">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src="assets/img/logo.webp" alt="logo" width="80" />
                        </a>
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link click_menu" onClick={() => navigateTo('home')}>Beranda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link click_menu" onClick={() => navigateTo('portfolio')}>Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link click_menu" onClick={() => navigateTo('sertifikat') }>Sertifikat</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link click_menu" onClick={() => navigateTo('contact') }>Kontak</a>
                                </li>
                            </ul>
                            <div class="others-options d-flex align-items-center">
                                <div class="option-item">
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
