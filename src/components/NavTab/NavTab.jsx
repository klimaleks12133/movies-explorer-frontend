import './NavTab.css'
import { Link } from 'react-router-dom';

function NavTab() {
    return (
        <nav className="NavTab">
            <Link className="navTab__link">Регистрация</Link>
            <Link className="navTab__link navTab__link_active">Войти</Link>
        </nav>
    );
}

export default NavTab;