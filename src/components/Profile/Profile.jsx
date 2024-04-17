import React from "react";
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from 'react-hook-form';

function Profile({onUpdateUser, onSignOut, setInfoTooltipMessage, setIsPopupOpen, setIsResultSuccess }) {

  const [isReductionMode, setIsReductionMode] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const currentUser = React.useContext(CurrentUserContext);

  const {
    register,
    formState: { errors, isValid, isDirty, },
    handleSubmit,
  } = useForm({ mode: "onChange", defaultValues: { name: currentUser.name, email: currentUser.email } });

  function handleEnableReduction(e) {
    e.preventDefault();
    setIsDisabled(false);
    setIsReductionMode(true);
  }

  function handleSignOut(e) {
    e.preventDefault();
    onSignOut();
  }

  const onSubmit = (data) => {
    if ((data.name !== currentUser.name) || (data.email !== currentUser.email)) {
      onUpdateUser({ name: data.name, email: data.email });
      setIsReductionMode(false);
      setIsDisabled(true);
      setIsResultSuccess(true);
      setInfoTooltipMessage("Новые данные успешно сохранены");
      setIsPopupOpen(true);
    } else {
      setInfoTooltipMessage("Данные не измененились");
      setIsPopupOpen(true);
    }
  }

  return (
    <main className="main">
      <section className="profile">
        <form
          className="profile__form"
          name="profile"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
          <div className="profile__labels-container">
            <label
              className="profile__label"
              type="name"
            >
              <span className="profile__label-text">Имя</span>
              <input
                name="name"
                className={`profile__input ${errors.name && 'profile__input_error'
                  }`}
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
                disabled={isDisabled}
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
                {...register('email', {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Поле Email заполнено некорректно"
                  },
                  required: "Поле Email должно быть заполнено"
                })}
                type="email"
                required
                placeholder="Введите новую почту"
                disabled={isDisabled}
              />
            </label>
            <span className="profile__error">{errors.email || ''}</span>
          </div>
          <div className="profile__button-container">
            {!isReductionMode ? (
              <div className="profile__button-default">
                <button
                  className="profile__button-edit"
                  onClick={handleEnableReduction}
                >
                  Редактировать
                </button>
                <button className="profile__button-exit" onClick={handleSignOut}>
                  Выйти из аккаунта
                </button>
              </div>
            ) : (
              <button
                className={`profile__button-save${(!isValid || !isDirty) ? " profile__button-save_disabled" : ""
                  }`}
                type="submit"
                disabled={!isValid || !isDirty}
              >
                Сохранить
              </button>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}

export default Profile;