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
                Je m'appelle <strong>Marilina Karpan</strong>. Experte de
                littérature japonaise et ancienne traductrice japonais-italien,
                j'ai créé en 2012 l'association TaikoMama à Montpellier.
              </p>

              <p>
                Huit ans de karaté pendant mon enfance me sont encore utiles
                aujourd'hui pour la posture et la gestuelle du taïko.
                Musicalement, je remercie les cours de piano, commencés à l'âge
                de 4 ans, ainsi que ceux de djembé, darbouka, danse africaine,
                afro-haïtienne, afro-contemporaine, danse indienne odissi,
                tango, percussion corporelle et butoh.
              </p>

              <p>
                Je fais de la recherche sur l’importance de la pratique musicale
                et de la motricité par rapport au développement cognitif et
                émotionnel. J'aime beaucoup travailler avec les jeunes et je
                suis heureuse de pouvoir intervenir dans les collèges et lycées
                grâce au Pass Culture.
              </p>

              <p>
                J'ai appris le taïko en Italie, en Allemagne, en Écosse et au
                Japon, avec Rita Superbi à Rome, Ljiljana Bulic à Francfort,
                Mugenkyo Taiko Drummers à Édimbourg et Gocoo à Tokyo.
              </p>

              <p>
                Mes groupes de taïko préférés sont les Taiko Bastards de
                Hambourg et Taiko Life de Nitay Zelniker. Mes morceaux préférés
                sont <em>Mozamjam</em> de Martin Doyle et <em>Steampunk'd</em>{" "}
                de Rannoch Purcell.
              </p>

              <p>
                Mon style est un taïko européen, jeune, frais et ouvert à tout
                type de collaboration artistique, du didgeridoo au storytelling.
              </p>

              <a
                href="mailto:info@taikomama.com?subject=Intervention Pass Culture"
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
