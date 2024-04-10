import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import React from "react";

function Movies({
  setIsLoading,
  setMovieIsFound,
  movieList,
  savedMovies,
  setSavedMovies,
  baseUrl,
  onLike,
  onDislike,
  onSearch,
  lastSearchingString,
  shortFilmsOnlyStatus,
  setShortFilmsOnlyStatus,
  setSearchStringIsMissed
}) {

  React.useEffect(() => {
    if (movieList.length > 0) {
      setMovieIsFound(true);
    } else {
      setMovieIsFound(false);
    }
    setIsLoading(false);
  }, [movieList]);
  return (
    <main className="movies">
      <SearchForm
        setMovieIsFound={setMovieIsFound}
        setIsLoading={setIsLoading}
        onSearch={onSearch}
        lastSearchingString={lastSearchingString}
        shortFilmsOnlyStatus={shortFilmsOnlyStatus}
        setShortFilmsOnlyStatus={setShortFilmsOnlyStatus}
        setSearchStringIsMissed={setSearchStringIsMissed}
      />
      <MoviesCardList
        movieList={movieList}
        baseUrl={baseUrl}
        onLike={onLike}
        onDislike={onDislike}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        shortFilmsOnlyStatus={shortFilmsOnlyStatus}
        setMovieIsFound={setMovieIsFound}
      />
    </main>
  );
};

export default Movies;
