const PassCultureSection = () => {
  return (
    <section id="pass-culture" className="content-section pass-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <div className="section-copy">
              <span className="section-kicker">Les jeunes</span>
              <h2>Pass Culture</h2>

              <div className="title-line"></div>

              <p>
                Je propose des actions culturelles originales à destination des
                lycées dans le cadre du Pass Culture Collectif. Mes
                interventions vont bien au-delà de la simple découverte d'un
                instrument. Elles invitent les élèves à expérimenter le rythme à
                travers le corps, l'écoute, la coordination et la dynamique de
                groupe. Selon les objectifs pédagogiques de l'établissement,
                plusieurs formats sont possibles:
              </p>

              <p>
                Conférences et rencontres autour du taiko, de la culture
                japonaise contemporaine et du parcours d'une musicienne
                européenne formée au Japon.
              </p>

              <p>
                Ateliers de jeux rythmiques favorisant la concentration,
                l'attention, la mémoire et la coopération au sein du groupe.
              </p>

              <p>
                Initiation au taiko, permettant aux participants de découvrir
                les techniques de base du tambour japonais et le plaisir de
                jouer ensemble.
              </p>

              <p>
                Découverte de la chorégraphie du taiko, discipline qui associe
                mouvement, énergie, présence scénique et expression musicale.
              </p>

              <a
                href="mailto:percussionstories@gmail.com?subject=Intervention Pass Culture"
                className="section-button"
              >
                Organiser une intervention
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <div className="section-image-wrapper image-right">
              <div className="image-decoration"></div>

              <img
                src="/drum.png"
                alt="Marilina pendant une activité de taïko"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassCultureSection;
