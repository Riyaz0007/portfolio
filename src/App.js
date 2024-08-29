import React from 'react';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="intro">
        <Intro/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
