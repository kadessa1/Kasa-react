import { NavLink } from 'react-router-dom';
import logo from '../../assets/pictures/logo.png';

function Header() {
    return (
        <header>
            <img src={logo} className='logo' alt='Logo Kasa' />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header>
    )
};

export default Header