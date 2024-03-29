import './Portfolio.css'

function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__container'>
                <h2 className='portfolio-title'>Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__element'>
                        <a
                            href="http://127.0.0.1:5500/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='portfolio__link'>Статичный сайт</a>
                    </li>
                    <li className='portfolio__element'>
                        <a
                            href="https://klimaleks12133.github.io/russian-travel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='portfolio__link'>Адаптивный сайт</a>
                    </li>
                    <li className='portfolio__element'>
                        <a
                            href="https://klimaleks12133.github.io/mesto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='portfolio__link'>Одностраничное приложение</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;