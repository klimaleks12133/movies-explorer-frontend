import './NotFound.css';
import { useNavigate  } from "react-router-dom";

function NotFound( ) {
  const navigate = useNavigate()
  const onBack = () => {
    navigate.onBack()
  }
  return (
    <section className="not-found">
      <p className="not-found__text-container">
        <h1 className="not-found__error">404</h1>
        <span className="not-found__error-name">Страница не найдена</span>
      </p>
      <button
        className="not-found__button"
        type="button"
        onClick={onBack}
      >
        Назад
      </button>
    </section>
  );
};

export default NotFound;