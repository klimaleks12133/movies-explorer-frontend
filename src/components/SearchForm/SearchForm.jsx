import './SearchForm.css';
import { useState, useEffect } from 'react';
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

  const [searchingMovieTitle, setSearchingMovieTitle] = useState(lastSearchingString || "");

  function handleChangeMovieTitle(e) {
    e.preventDefault();
    setSearchingMovieTitle(e.target.value);
  }

  function handleChangeShortFilmsOnlyStatus() {
    setShortFilmsOnlyStatus(!shortFilmsOnlyStatus);
    updateMovieIsFoundState();
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    if (isSavedMoviesPage || searchingMovieTitle.length > 0) {
      setSearchStringIsMissed(false);
      onSearch(searchingMovieTitle, shortFilmsOnlyStatus);
    } else {
      setSearchStringIsMissed(true);
      setIsLoading(false);
      setMovieIsFound(false);
    }
  }

  function updateMovieIsFoundState() {
    if (searchingMovieTitle.length === 0 && !isSavedMoviesPage) {
      setSearchStringIsMissed(true);
      setMovieIsFound(false);
    } else {
      setMovieIsFound(true);
    }
  }

  useEffect(() => {
    updateMovieIsFoundState();
  }, [searchingMovieTitle, isSavedMoviesPage]);
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
          value={searchingMovieTitle}
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
