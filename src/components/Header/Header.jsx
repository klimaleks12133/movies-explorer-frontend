import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import NavTab from '../NavTab/NavTab';

function Header() {
    return (
        <Header className='header'>
            <Link
                to='/'
                className='header__link'
            >
                <img
                    src={Logo}
                    alt='Логотип'
                />
            </Link>
            <NavTab />
        </Header>
    );
}

export default Header;