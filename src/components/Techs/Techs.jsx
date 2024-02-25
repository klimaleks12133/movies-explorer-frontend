import './Techs.css';

function Techs() {
    return (
        <section className="techs">
            <div className="techs__container">
                <h2 className="section-title">Технологии</h2>
                <div className="techs-info">
                    <h3 className='techs-info__description'>7 Технологий</h3>
                    <p className="techs-info__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className="techs__icon">
                        <li className='techs__icon-spisok'>
                            <a className='techs__icon-text'
                                href="https://doka.guide/html/html"
                                target="_blank"
                                rel="noreferrer">
                                HTML
                            </a>
                        </li>
                        <li className='techs__icon-spisok'>
                            <a className='techs__icon-text'
                                href="https://doka.guide/css/"
                                target="_blank"
                                rel="noreferrer">
                                CSS
                            </a>
                        </li>
                        <li className='techs__icon-spisok'>
                            <a className='techs__icon-text'
                                href="https://doka.guide/js/"
                                target="_blank"
                                rel="noreferrer">
                                JS
                            </a>
                        </li>
                        <li className='techs__icon-spisok'>
                            <a className='techs__icon-text'
                                href="https://doka.guide/js/react-and-alternatives/"
                                target="_blank"
                                rel="noreferrer">
                                React
                            </a>
                        </li>
                        <li className='techs__icon-spisok'>
                            <a className='techs__icon-text'
                                href="https://git-scm.com/doc"
                                target="_blank"
                                rel="noreferrer">
                                Git
                            </a>
                        </li>
                        <li className='techs__icon-spisok'>
                            <a className='techs__icon-text'
                                href="https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/Introduction"
                                target="_blank"
                                rel="noreferrer">
                                Express.js
                            </a>
                        </li>
                        <li className='techs__icon-spisok'>
                            <a className='techs__icon-text'
                                href="https://www.mongodb.com/"
                                target="_blank"
                                rel="noreferrer">
                                mongoDB
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
}

export default Techs;