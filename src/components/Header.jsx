import "../styles/header.css";

const Header = () => {
  const closeMenu = () => {
    const navbar = document.getElementById("mainNavbar");

    if (navbar?.classList.contains("show")) {
      const bootstrap = window.bootstrap;

      if (bootstrap) {
        const collapse =
          bootstrap.Collapse.getInstance(navbar) ||
          new bootstrap.Collapse(navbar, {
            toggle: false,
          });

        collapse.hide();
      }
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a
            className="navbar-brand"
            href="#accueil"
            onClick={closeMenu}
            aria-label="Marilina Taiko - Accueil"
          >
            <img
              src="/logo.png"
              alt=""
              className="header-logo"
              aria-hidden="true"
            />

            <span>
              Marilina
              <strong>Taiko</strong>
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNavbar"
          >
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#accueil" onClick={closeMenu}>
                  Accueil
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#parcours" onClick={closeMenu}>
                  Mon parcours
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#pass-culture"
                  onClick={closeMenu}
                >
                  Pass Culture
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#souvenirs" onClick={closeMenu}>
                  Souvenirs
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link contact-link"
                  href="#reseaux"
                  onClick={closeMenu}
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
