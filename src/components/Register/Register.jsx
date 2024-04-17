import './Register.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../image/logo.svg';

function Register({ onAddUser, isInputDisabled }) {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    onAddUser({ name: data.name, email: data.email, password: data.password });
  };

  return (
    <main className="main">
      <section className="register">
        <form
          className="register__form"
          name="register"
          noValidate
          onSubmit={handleSubmit}
        >
          <Link
            to="/"
            className="register__link"
          >
            <img
              src={logo}
              alt="Логотип"
              className="register__logo"
            />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <div className="register__labels-container" onSubmit={handleSubmit(onSubmit)}>
            <label className="register__label">
              <span className="register__label-text">Имя</span>
              <input
                name="name"
                className={`register__input ${errors.name && 'register__input_error'
                  }`}                // onChange={handleChange}
                // value={values.name || ''}
                type="text"
                {...register("name", {
                  minLength: {
                    value: 2,
                    message: "Имя должно содержать не менее 2 знаков"},
                  maxLength: {
                    value: 30,
                    message: "Имя должно содержать не более 30 знаков"
                  },
                  pattern: {
                    value: /^[A-Za-zА-Яа-я ]+$/,
                    message: "Поле Имя заполнено некорректно"
                  },
                  required: "Поле Имя должно быть заполнено"
              })}
                required
                placeholder="Введите имя"
                disabled={isInputDisabled}
              />
              <span className="register__error">{errors.name || ''}</span>
            </label>
            <label className="register__label">
              <span className="register__label-text">E-mail</span>
              <input
                name="email"
                className={`register__input ${errors.email && 'register__input_error'
                  }`}                // onChange={handleChange}
                // value={values.email || ''}
                type="email"
                {...register('email', {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Поле Email заполнено некорректно"
                  },
                  required: "Поле Email должно быть заполнено"
                })}
                required
                placeholder="Введите почту"
                disabled={isInputDisabled}
              />
              <span className="register__error">{errors.email || ''}</span>
            </label>
            <label className="register__label">
              <span className="register__label-text">Пароль</span>
              <input
                name="password"
                className={`register__input ${errors.password && 'register__input_error'
                  }`}
                  {...register("password", {
                    minLength: {
                      value: 2,
                      message: "Пароль должен содержать не менее 2 знаков"},
                    maxLength: {
                      value: 30,
                      message: "Пароль должен содержать не более 30 знаков"
                    },
                    required: "Поле Пароль должно быть заполнено"
                })}
                // onChange={handleChange}
                // value={values.password || ''}
                type="password"
                required
                minLength="6"
                maxLength="30"
                placeholder="Введите пароль"
                disabled={isInputDisabled}
              />
              <span className="register__error">{errors.password || ''}</span>
            </label>
          </div>
          <button
            type="submit"
            className={`register__button ${!isValid && 'register__button_disabled'
              }`}
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>
        <span className="register__support">
          Уже зарегистрированы?&nbsp;
          <Link
            to="/signin"
            className="register__link"
            onClick={register}
          >
            Войти
          </Link>
        </span>
      </section>
    </main>
  );
};

export default Register;