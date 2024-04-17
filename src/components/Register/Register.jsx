import './Register.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../image/logo.svg';
import React from "react";


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
    <section className="register">
      <div className="register__form">
        <Link to="/" className="register__link">
          <img
            className="register__logo"
            src={logo}
            alt="Логотип проекта Movies Explorer"
          />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__labels-container" onSubmit={handleSubmit(onSubmit)}>
          <label className="register__label">
            <span className="register__label-text" htmlFor="name">
              Имя
            </span>
            <input
              required
              className="register__input register__input_error"
              {...register("name", {
                minLength: {
                  value: 2,
                  message: "Имя должно содержать не менее 2 знаков"
                },
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
              id="name"
              type="text"
              disabled={isInputDisabled}
            />
            <span className={`register__error${errors.name ? " register__error_active" : ""}`}>{errors.name ? errors.name.message : ""}</span>

            <label className="register__label-text" htmlFor="email">
              E-mail
            </label>
            <input
              required
              className="register__input register__input_error"
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
            <span className={`register__error${errors.email ? " register__error_active" : ""}`}>{errors.email ? errors.email.message : ""}</span>

            <label className="register__label-text" htmlFor="password">
              Пароль
            </label>
            <input
              required
              className="register__input register__input_error"
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
              name="password"
              type="password"
              disabled={isInputDisabled}
            />
            <span className={`register__error${errors.password ? " register__error_active" : ""}`}>{errors.password ? errors.password.message : ""}</span>

            <button
              className={`register__button${!isValid ? " register__button_disabled" : ""
                }`}
              type="submit"
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
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


          </label>
        </form>
      </div >
    </section >
  );
}

export default Register;