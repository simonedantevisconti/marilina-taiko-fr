import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid contatti">
      <div className="container py-5 footer">
        <div className="row align-items-center">
          <div className="col-12 contatti-title">
            <h2 className="text-center mb-4">Contacts</h2>
          </div>

          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <a
              href="https://wa.me/33603263815"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>Écrivez-moi</span>
            </a>
          </div>

          <div className="col-12 col-md-6 text-center text-md-end social-icons">
            <a
              href="https://www.instagram.com/Mari__Taiko"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.youtube.com/@marilina-taiko"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a href="mailto:info@taikomama.com" aria-label="E-mail">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          <div className="col-12 diritti d-flex flex-column align-items-center text-center mt-5">
            <img
              src="/sole.png"
              alt="Symbole du soleil de Marilina Taiko"
              className="img-fluid sole mb-3"
            />

            <small>
              © {new Date().getFullYear()} Marilina Taiko — Tous droits
              réservés.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
