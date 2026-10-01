import { Link } from "react-router-dom";
import "../styles/legal.css";

const NotFound = () => {
  return (
    <section className="legal-page not-found-page">
      <div className="container legal-container text-center">
        <p className="not-found-code">404</p>

        <h1 className="legal-title">Page introuvable</h1>

        <p className="not-found-text">
          Cette page n'existe pas ou a été déplacée.
          <br />
          Revenez à l'accueil pour continuer à découvrir Marilina Taiko.
        </p>

        <Link to="/" className="legal-button">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
