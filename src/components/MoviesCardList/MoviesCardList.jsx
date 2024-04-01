import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import films from '../../utils/films';

function MoviesCardList() {
    return (
        <section className='movies-cards'>
            <ul className='movies-cards__list'>
                {films.map((films, index) => {
                    return (
                        <MoviesCard
                            key={index}
                            image={films.image}
                            name={films.nameRU}
                        />
                    );
                })}
            </ul>
            <button className="movies-cards__button" type="button">Ещё</button>
        </section>
    )
}

export default MoviesCardList;