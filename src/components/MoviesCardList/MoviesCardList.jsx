import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import { useLocation } from "react-router-dom";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCardList({ movieList, savedMovies, baseUrl, onLike, onDislike }) {

  const currentUser = React.useContext(CurrentUserContext);
  const userLocationPath = useLocation().pathname;

  let slicedMoviesArray = movieList.slice(0, 12);
  const [moviesArrayForRender, setMoviesArrayForRender] = React.useState([]);

  React.useEffect(() => {
    setMoviesArrayForRender(slicedMoviesArray);
  }, []);
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {movieList.map((movieItem, i) => {
          if (userLocationPath === "/saved-movies") {
            if (movieItem.owner === currentUser._id) {
              return (
                <MoviesCard
                  key={movieItem._id}
                  card={movieItem}
                  baseUrl={baseUrl}
                  onLike={onLike}
                  onDislike={onDislike}
                  savedMovies={savedMovies}
                />
              )
            }
          } else {
            return (
              <MoviesCard
                key={movieItem.id}
                card={movieItem}
                baseUrl={baseUrl}
                onLike={onLike}
                onDislike={onDislike}
                savedMovies={savedMovies}
              />
            )
          }
        })}
      </ul>
      <button
        type="button"
        className="movies-cards__button"
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
