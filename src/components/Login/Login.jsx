import './Login.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg';
import { useForm } from 'react-hook-form';

function Login({ onEnterUser, isInputDisabled }) {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    onEnterUser({ email: data.email, password: data.password });
  }

  return (
    <section className="login">
      <div className="login__form">
        <Link to="/" className="login__link">
          <img
            className="login__logo"
            src={logo}
            alt="Логотип проекта Movies Explorer"
          />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__labels-container" onSubmit={handleSubmit(onSubmit)}>
          <label className="login__label">

            <span className="login__label-text" htmlFor="email">
              E-mail
            </span>
            <input
              required
              className="login__input login__input-error"
              {...register('email', {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Поле Email заполнено некорректно"
                },
                required: "Поле Email должно быть заполнено"
              })}
              id="email"
              type="email"
              disabled={isInputDisabled}
            />
            <span className={`login__error${errors.email ? " login__error_active" : ""}`}>{errors.email ? errors.email.message : ""}</span>

            <span className="login__label-text" htmlFor="password">
              Пароль
            </span>
            <input
              required
              className="login__input login__input-error"
              {...register("password", {
                minLength: {
                  value: 2,
                  message: "Пароль должен содержать не менее 2 знаков"
                },
                maxLength: {
                  value: 30,
                  message: "Пароль должен содержать не более 30 знаков"
                },
                required: "Поле Пароль должно быть заполнено"
              })}
              id="password"
              type="password"
              disabled={isInputDisabled}
            />
            <span className={`login__error${errors.password ? " login__error_active" : ""}`}>{errors.password ? errors.password.message : ""}</span>
          </label>
          <button
            className={`login__button ${!isValid && 'login__button_disabled'}`}
            type="submit"
            disabled={!isValid}>
            Войти
          </button>
          <span className="login__support">
            Ещё не зарегистрированы?&nbsp;
            <Link
              to="/signup"
              className="login__link"
            >
              Регистрация
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
}

export default Login;