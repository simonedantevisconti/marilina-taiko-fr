import "../styles/legal.css";

const PrivacyPolicy = () => {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        <h1 className="legal-title">Politique de confidentialité</h1>

        <p className="legal-updated">Dernière mise à jour : octobre 2026</p>

        <section className="legal-section">
          <h2>1. Responsable du site</h2>
          <p>
            Le site Marilina Taiko présente des activités, spectacles, ateliers
            et projets liés au taïko.
          </p>
          <p>
            Pour toute question concernant la confidentialité, vous pouvez écrire
            à{" "}
            <a href="mailto:percussionstories@gmail.com">
              percussionstories@gmail.com
            </a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Données traitées</h2>
          <p>
            Le site ne comporte actuellement pas de formulaire de création de
            compte ni de système d'analyse d'audience intégré. Des données
            peuvent toutefois être transmises volontairement lorsque vous
            contactez Marilina Taiko par e-mail, WhatsApp ou via les réseaux
            sociaux.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Finalités</h2>
          <p>
            Les informations communiquées volontairement sont utilisées
            uniquement pour répondre aux demandes, organiser une activité,
            échanger au sujet d'un projet ou assurer le suivi d'un contact.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Services externes</h2>
          <p>
            Le site contient des liens vers des services externes tels que
            Instagram, YouTube et WhatsApp. Lorsque vous utilisez ces services,
            leurs propres politiques de confidentialité s'appliquent.
          </p>
          <p>
            Certaines ressources visuelles et typographiques peuvent également
            être chargées depuis des services tiers, notamment Google Fonts,
            Bootstrap et Font Awesome.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Conservation</h2>
          <p>
            Les données reçues directement par contact sont conservées pendant
            la durée nécessaire au traitement de la demande et, le cas échéant,
            pendant les durées imposées par la réglementation applicable.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Vos droits</h2>
          <p>
            Conformément à la réglementation applicable, vous pouvez demander
            l'accès, la rectification ou la suppression de vos données
            personnelles, ainsi que l'exercice des autres droits prévus par la
            loi.
          </p>
          <p>
            Pour exercer ces droits, écrivez à{" "}
            <a href="mailto:percussionstories@gmail.com">
              percussionstories@gmail.com
            </a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Mise à jour de cette politique</h2>
          <p>
            Cette politique peut être mise à jour afin de refléter les évolutions
            du site, des services utilisés ou de la réglementation.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
