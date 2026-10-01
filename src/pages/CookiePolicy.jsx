import "../styles/legal.css";

const CookiePolicy = () => {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        <h1 className="legal-title">Politique relative aux cookies</h1>

        <p className="legal-updated">Dernière mise à jour : octobre 2026</p>

        <section className="legal-section">
          <h2>1. Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier susceptible d'être enregistré sur
            votre appareil lors de la consultation d'un site internet.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Cookies utilisés par le site</h2>
          <p>
            À ce jour, Marilina Taiko n'utilise pas directement de cookies
            publicitaires, de profilage ou d'outil d'analyse d'audience configuré
            par le site.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Services tiers</h2>
          <p>
            Le site charge certaines ressources depuis des services tiers comme
            Google Fonts, Bootstrap et Font Awesome et contient des liens vers
            Instagram, YouTube et WhatsApp.
          </p>
          <p>
            Ces fournisseurs peuvent traiter certaines informations techniques
            selon leurs propres règles lorsque leurs services sont chargés ou
            lorsque vous cliquez sur leurs liens.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Gestion des cookies</h2>
          <p>
            Vous pouvez gérer, bloquer ou supprimer les cookies depuis les
            paramètres de votre navigateur. Le blocage de certaines technologies
            peut affecter l'affichage ou le fonctionnement de certains services
            externes.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Évolutions futures</h2>
          <p>
            Si des outils d'analyse, de publicité ou d'autres technologies
            nécessitant un consentement sont ajoutés ultérieurement, cette
            politique sera mise à jour et un mécanisme de consentement sera mis
            en place lorsque cela sera nécessaire.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Contact</h2>
          <p>
            Pour toute question relative aux cookies, écrivez à{" "}
            <a href="mailto:percussionstories@gmail.com">
              percussionstories@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicy;
