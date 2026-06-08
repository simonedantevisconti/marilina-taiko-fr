const HeroSection = () => {
  return (
    <section id="accueil" className="hero-section">
      <div className="hero-overlay"></div>

      <img
        src="/hero.png"
        alt="Marilina jouant du taïko"
        className="hero-background"
      />

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">Tambour japonais</p>

          <h1>
            Marilina
            <span>et son taiko</span>
          </h1>

          <div className="hero-description">
            <h2>Intervenante de tambour japonais</h2>

            <ul>
              <li>Spectacles et ateliers</li>
              <li>Collèges et lycées avec le Pass Culture</li>
              <li>
                Masterclasses pour les écoles de musique et de danse
                contemporaine
              </li>
              <li>Location de tambours</li>
              <li>Cours de japonais individuels ou en petits groupes</li>
              <li>Team-building</li>
            </ul>

            <p className="hero-location">
              <i className="fa-solid fa-location-dot"></i>
              Montpellier, Nîmes, Hérault, Gard
            </p>
          </div>

          <a href="#parcours" className="hero-button">
            Découvrir mon parcours
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
