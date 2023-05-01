import logo from '../../assets/pictures/logo-footer.png';
import "./style.css";

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} className='logo-footer' alt='Logo Kasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer