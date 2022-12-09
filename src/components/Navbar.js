function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <nav className="navbar bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img
                  src="https://www.burgerking.in/static/media/logo.d0829240.png"
                  alt=""
                  className="d-inline-block align-text-top logo"
                />
                BURGER HOUSE
              </a>
            </div>
          </nav>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MENU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  OUR STORY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
