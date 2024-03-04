import { useState } from 'react';
import './Burger.css';
import { NavLink } from 'react-router-dom';

function BurgerMenu() {
    const [isActiveBurger, setIsActiveBurger] = useState(false);

    const handleOpenBurger = () => {
        setIsActiveBurger(!isActiveBurger);
    };
    return (
        <section
            className={`${!isActiveBurger ? 'burger' : 'burger burger_active'}`}
        >
            <nav
                className={`${!isActiveBurger
                    ? 'burger__container'
                    : 'burger__container burger__container_active'
                    }`}
            >
                <div className="burger-btn__container">
                    <button
                        type="button"
                        onClick={handleOpenBurger}
                        className={`${!isActiveBurger
                            ? 'burger-btn'
                            : 'burger-btn burger-btn_active'
                            }`}
                    >
                        <span
                            className={`${!isActiveBurger
                                ? 'burger-span'
                                : 'burger-span burger-span_active'
                                }`}
                        ></span>
                    </button>
                </div>
                {isActiveBurger ? (
                    <>
                        <ul className="burger-menu__links">
                            <li>
                                <NavLink
                                    to="/"
                                    className="burger-menu__link"
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/movies"
                                    className="burger-menu__link"
                                >
                                    Фильмы
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/saved-movies"
                                    className="burger-menu__link"
                                >
                                    Сохранённые фильмы
                                </NavLink>
                            </li>
                        </ul>
                        <div className="burger-menu__links burger-menu__links_account">
                            <NavLink
                                to="/profile"
                                className="burger-menu__link burger-menu__link_account"
                            >
                                Аккаунт
                            </NavLink>
                            <div className="burger-menu__link-icon"></div>
                        </div>
                    </>
                ) : (
                    ''
                )}
            </nav>
        </section>
    );
}

export default BurgerMenu;