import React from 'react';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Skill from './components/skill/Skill';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="intro">
        <Intro/>
      </div>
      <div id="skill">
        <Skill/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="portfolio">
        {/* Assuming you have a Portfolio component */}
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
