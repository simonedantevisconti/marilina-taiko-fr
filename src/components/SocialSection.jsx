const SocialSection = () => {
  return (
    <section id="reseaux" className="social-section">
      <div className="container">
        <div className="social-box">
          <div className="section-heading text-center">
            <span className="section-kicker">Restons en contact</span>
            <h2>Mes réseaux sociaux</h2>
            <div className="title-line mx-auto"></div>

            <p>
              Découvrez mes spectacles, mes ateliers et les prochaines activités
              autour du taïko.
            </p>
          </div>

          <div className="social-links-grid">
            <a
              href="https://www.instagram.com/Mari__Taiko"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <i className="fa-brands fa-instagram"></i>

              <div>
                <strong>Instagram</strong>
                <span>@Mari__Taiko</span>
              </div>
            </a>

            <a
              href="https://www.youtube.com/@marilina-taiko"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <i className="fa-brands fa-youtube"></i>

              <div>
                <strong>YouTube</strong>
                <span>Marilina Taiko</span>
              </div>
            </a>

            <a
              href="https://wa.me/33603263815"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <i className="fa-brands fa-whatsapp"></i>

              <div>
                <strong>WhatsApp</strong>
                <span>Écrivez-moi</span>
              </div>
            </a>

            <a href="mailto:info@taikomama.com" className="social-card">
              <i className="fa-solid fa-envelope"></i>

              <div>
                <strong>E-mail</strong>
                <span>info@taikomama.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
