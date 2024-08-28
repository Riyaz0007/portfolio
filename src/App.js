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
      <Intro/>
      <Skill/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
