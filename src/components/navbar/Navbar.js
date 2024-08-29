import React, { useState,useEffect } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className='nav-heading'>Mohammad Riyaz</div>
            <ul className={`navitems ${isNavOpen ? 'active' : ''}`}>
                <li>
                    <Link to="intro" smooth={true} duration={400} offset={-110}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} offset={-80}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="services" smooth={true} duration={500} offset={-80}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500} offset={-80}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500} offset={-80}>
                        Skills
                    </Link>
                </li>
            </ul>
            <button className='navbtn' onClick={toggleNav}>
            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
             </button>
        </nav>
    );
};

export default Navbar;
