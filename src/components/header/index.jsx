import { NavLink } from 'react-router-dom';
import logo from '../../assets/pictures/logo.png';
import "./style.css";

function Header() {
    return (
        <header className='header'>
            <img src={logo} className='logo' alt='Logo Kasa' />
            <nav className='nav-bar'>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined }>Accueil</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined }>A propos</NavLink>
            </nav>
        </header>
    )
};

export default Header