import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';

function Navigation(isLoggedIn, logIn) {
  return (
    <>
      {!isLoggedIn ? (
        <nav className="navigation">
          <Link to="/signup" className="navigation__link">Регистрация</Link>
          <Link to="/signin" className="navigation__link navigation__link_active" onClick={logIn}>Войти</Link>
        </nav>
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