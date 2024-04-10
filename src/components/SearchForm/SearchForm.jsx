import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  setMovieIsFound,
  onSearch,
  lastSearchingString,
  shortFilmsOnlyStatus,
  setShortFilmsOnlyStatus,
  setSearchStringIsMissed,
  isSavedMoviesPage,
  setIsLoading,
}) {

  const [searchingMovieTitle, setSearchingMovieTitle] = React.useState(lastSearchingString ? lastSearchingString : "");

  function handleChangeMovieTitle(e) {
    e.preventDefault();
    setSearchingMovieTitle(e.target.value);
  }

  function handleChangeShortFilmsOnlyStatus() {
    setShortFilmsOnlyStatus(shortFilmsOnlyStatus ? false : true);
    if (searchingMovieTitle.length === 0) {
      if (!isSavedMoviesPage) {
        setSearchStringIsMissed(true);
      }
      setMovieIsFound(false);
    } else {
      setMovieIsFound(true);
    }
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    if (isSavedMoviesPage) {
      onSearch(searchingMovieTitle, shortFilmsOnlyStatus);
    } else if (searchingMovieTitle.length === 0) {
      setSearchStringIsMissed(true);
      setIsLoading(false);
      setMovieIsFound(false);
    } else {
      setSearchStringIsMissed(false);
      onSearch(searchingMovieTitle, shortFilmsOnlyStatus);
    }
  }
  return (
    <section className='search'>
      <form className='search__form'
        name='form'
        noValidate
        onSubmit={handleSearchMovies}>
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="Фильм"
          autoComplete="off"
          value={searchingMovieTitle || ""}
          onChange={handleChangeMovieTitle}
        />
        <span className="search__error"></span>
        <button
          className='search__button'
          type='submit'>
        </button>
      </form>
      <FilterCheckbox
        isChecked={shortFilmsOnlyStatus}
        onCheckboxClick={handleChangeShortFilmsOnlyStatus}
      />
    </section>
  )
}

export default SearchForm;
