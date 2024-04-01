import './AboutProject.css';

function AboutProject() {
  return (
    <>
      <section className="about-project">
        <div className="about-project__container">
          <h2 className="section-title">О проекте</h2>
          <div className="about-project-info">
            <article className="two-columns">
              <h3 className="two-columns__text">
                Дипломный проект включал 5 этапов
              </h3>
              <p className="two-columns__paragraph">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </article>
            <article className="two-columns">
              <h3 className="two-columns__text">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="two-columns__paragraph">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </article>
          </div>
          <div className="about-project__layout">
            <div className="about-project__backend">
              <span className="about-project__backend-duration">1 неделя</span>
              <span className="about-project__layout-title">Back-end</span>
            </div>
            <div className="about-project__frontend">
              <span className="about-project__frontend-duration">4 недели</span>
              <span className="about-project__layout-title">Front-end</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutProject;