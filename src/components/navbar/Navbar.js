import React, { useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className='navbar'>
            <div className='nav-heading'>Mohammad Riyaz</div>
            <ul className={`navitems ${isNavOpen ? 'active' : ''}`}>
                <li>
                    <Link to="intro" smooth={true} duration={400} offset={-110}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="skill" smooth={true} duration={500} offset={-80}>
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
            </ul>
            <button className='navbtn' onClick={toggleNav}>
            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
             </button>
        </nav>
    );
};

export default Navbar;
