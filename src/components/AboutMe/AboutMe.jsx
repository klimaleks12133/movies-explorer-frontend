import './AboutMe.css';
import Avatar from '../../image/photo_2021-09-27_01-07-17.jpg';

function AboutMe() {
    return (
        <>
            <section className='about-me'>
                <div className='about-me__container'>
                    <h2 className="section-title">Студент</h2>
                    <div className='about-me__biography'>
                        <img
                            className='about-me__img'
                            src={Avatar}
                            alt='ай что за лев'>
                        </img>
                        <div className='about-me__biography_info'>
                            <h3 className='about-me__name'>Александр</h3>
                            <p className='about-me__age'>Фронтенд-разработчик, 24 года</p>
                            <p className='about-me__info'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                            </p>
                            <a
                                href="https://github.com/klimaleks12133"
                                target="_blank"
                                rel="noreferrer"
                                className="about-me__link"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;