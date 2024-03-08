import './Movies.css';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies() {
    return (
        <nav className="movies">
            <SearchForm />
            <MoviesCardList />
        </nav>
    );
}

export default Movies;