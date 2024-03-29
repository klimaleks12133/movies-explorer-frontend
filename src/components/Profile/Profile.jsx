import './Profile.css';
import FormValidation from '../Hooks/FormValidation';

export default function Profile({ onClick, isLoggedIn }) {
    const { values, handleChange, errors, isValid } = FormValidation();

    return (
        <main className="main">
            <section className="profile">
                <form
                    className="profile__form"
                    name="profile"
                    noValidate
                >
                    <h1 className="profile__title">Привет, Александр!</h1>
                    <div className="profile__labels-container">
                        <label className="profile__label" type="name">
                            <span className="profile__label-text">Имя</span>
                            <input
                                name="name"
                                className={`profile__input ${errors.name && 'profile__input_error'
                                    }`}
                                onChange={handleChange}
                                value={values.name || ''}
                                type="text"
                                required
                                minLength="2"
                                maxLength="30"
                                pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                                placeholder="Введите новое имя"
                            />
                        </label>
                        <span className="profile__error-name">{errors.name || ''}</span>
                        <label
                            className="profile__label"
                            type="email"
                        >
                            <span className="profile__label-text">E-mail</span>
                            <input
                                name="email"
                                className={`profile__input ${errors.email && 'profile__input_error'
                                    }`}
                                onChange={handleChange}
                                value={values.email || ''}
                                type="email"
                                required
                                placeholder="Введите новую почту"
                            />
                        </label>
                        <span className="profile__error">{errors.email || ''}</span>
                    </div>
                    <div className="profile__button-container">
                        <button
                            type="submit"
                            className={`profile__button-edit ${!isValid && 'profile__button-edit_disabled'
                                }`}
                            disabled={!isValid ? true : false}
                        >
                            Редактировать
                        </button>
                        <button
                            type="submit"
                            className="profile__button-exit"
                            onClick={onClick}
                            isLoggedIn={isLoggedIn}
                        >
                            Выйти из аккаунта
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}