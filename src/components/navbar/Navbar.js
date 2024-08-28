import logo from '../assest/logo.png'
import '../navbar/navbar.css';
const Navbar = () =>{
    return (
        <>
        <nav className='navbar'>
            <img className='logo' src={logo} alt='Log'/>
            <ul className='navitems'>
                <li >Home</li>
                <li>About</li>
                <li>Services</li>
                <li>portfolio</li>

            </ul>
            <button className='navbtn'>Contact Me</button>
        </nav>
        
        
        </>
    )
}
export default Navbar;