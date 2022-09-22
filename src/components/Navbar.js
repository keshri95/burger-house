function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <nav class="navbar bg-light">
            <div class="container ">
              <a class="navbar-brand" href="#">
                <img
                  src="https://www.burgerking.in/static/media/logo.d0829240.png"
                  alt=""
                  class="d-inline-block align-text-top logo"
                />
                BURGER HOUSE
              </a>
            </div>
          </nav>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  MENU
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  OUR STORY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
