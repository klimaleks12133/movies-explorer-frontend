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
    <main className="main">
      <section className="login">
        <form
          className="login__form"
          name="login"
          noValidate
          onSubmit={handleSubmit}
        >
          <Link
            to="/"
            className="login__link"
          >
            <img
              src={logo}
              alt="Логотип"
              className="login__logo"
            />
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
          <div className="login__labels-container" onSubmit={handleSubmit(onSubmit)}>
            <label className="login__label">
              <span className="login__label-text">E-mail</span>
              <input
                name="email"
                className={`login__input ${errors.email && 'login__input_error'
                  }`}
                // onChange={handleChange}
                // value={values.email || ''}
                {...register('email', {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Поле Email заполнено некорректно"
                  },
                  required: "Поле Email должно быть заполнено"
                })}
                id="email"
                type="email"
                required
                disabled={isInputDisabled}
              />
              <span className="login__error">{errors.email || ''}</span>
            </label>
            <label className="login__label">
              <span className="login__label-text">Пароль</span>
              <input
                name="password"
                className={`login__input ${errors.password && 'login__input_error'
                  }`}
                // onChange={handleChange}
                // value={values.password || ''}
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
                type="password"
                placeholder="Введите пароль"
                disabled={isInputDisabled}
              />
              <span className="login__error">{errors.password || ''}</span>
            </label>
          </div>
          <button
            type="submit"
            className={`login__button ${!isValid && 'login__button_disabled'}`}
            disabled={!isValid}
          // onClick={logIn}
          >
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
      </section>
    </main>
  );
};

export default Login;