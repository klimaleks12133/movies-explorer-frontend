import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className='footer__info'>
          <p className="footer__info-data">© 2024</p>
          <div className='footer__links'>
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com/klimaleks12133"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
