import './MoviesCard.css';
import React from "react";
import { Route } from "react-router-dom";

function MoviesCard({ card, baseUrl, onLike, onDislike, savedMovies }) {
  const isLiked = savedMovies.some(item => (item.movieId === card.id));
  const filmDurationHours = Math.round(card.duration / 60);
  const filmDurationMinutes = card.duration % 60;

  function handleLikeClick() {
    onLike(
      {
        "country": card.country,
        "director": card.director,
        "duration": card.duration,
        "year": card.year,
        "description": card.description,
        "image": card.image.url,
        "trailerLink": card.trailerLink,
        "nameRU": card.nameRU,
        "nameEN": card.nameEN,
        "thumbnail": card.image.previewUrl,
        "movieId": card.id
      }
    );
  }

  function handleDislikeClick() {
    onDislike(card);
  }

  return (
    <>
      <li className="movies-card">
        <article className="movies-card__item">
          <a
            target="_blank"
            rel="noreferrer"
            href="/"
          >
            <img
              className="movies-card__image"
              src={`${baseUrl}${card.image.url || card.image}`} alt={card.nameRU}
            />
          </a>
        </article>
        <div className="movies-card__description">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          {path === '/movies' ? (
            <label className="movies-card__label">
              <input
                className="movies-card__input"
                type="checkbox"
              />
              <span className="movies-card__checkbox"></span>
            </label>
          ) : (
            <button
              type="button"
              className="movies-card__button movies-card__button_unsave"
              aria-label="Удалить фильм из сохранённых"
              title="Удалить фильм из сохранённых"
            ></button>
          )}
        </div>
        <span className="movies-card__duration">{`${filmDurationHours}ч ${filmDurationMinutes}м`}</span>
      </li>
    </>
  );
};

export default MoviesCard;
