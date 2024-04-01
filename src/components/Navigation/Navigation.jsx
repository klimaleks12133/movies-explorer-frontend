import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Burger from '../Burger/Burger';

function Navigation(isLoggedIn, logIn) {
  const isMobile = useMediaQuery({ query: `(max-width: 800px)` });
  return (
    <>
      {!isLoggedIn ? (
        <nav className="navigation">
          <Link to="/signup" className="navigation__link">Регистрация</Link>
          <Link to="/signin" className="navigation__link navigation__link_active" onClick={logIn}>Войти</Link>
        </nav>
      ) : isMobile ? (
        <Burger />
      ) : (
        <nav className="navigation">
          <NavLink to="/movies" className="navigation__link navigation__link_film">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="navigation__link navigation__link_save-film">Сохранённые фильмы</NavLink>
          <NavLink to="/main" className="navigation__link navigation__link_account">Аккаунт</NavLink>
        </nav>
      )}
    </>
  );
}

export default Navigation;