import './SearchForm.css'
import FormValidation from '../Hooks/FormValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    const { values, handleChange } = FormValidation();
    return (
        <section className='search'>
            <form className='search__form'
                name='form'
                noValidate>
                <input
                    className="search__input"
                    name="search"
                    type="text"
                    placeholder="Фильм"
                    autoComplete="off"
                    value={values.search || ''}
                    onChange={handleChange}
                    required
                />
                <span className="search__error"></span>
                <button
                    className='search__button'
                    type='submit'>
                </button>
            </form>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;