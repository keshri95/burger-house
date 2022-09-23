function Footer() {
  return (
    <>
      <div className="container-fluid text-bg-dark border border-2 py-4 shadow-lg footerImg">
        <div className="container">

        <div className="row my-3">
          <div className="row">
            <div>
              <img
                src="https://www.burgerking.in/static/media/logo.d0829240.png"
                alt=""
                class="d-inline-block align-text-top logo mb-4"
              />
              <span className="display-5">BURGER HOUSE</span>
            </div>
          </div>
          <div className="col-6">
            <p className="fs-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              id totam cupiditate iure ratione atque aperiam expedita
              consectetur adipisci, nihil voluptatum facere, dolores ipsa nobis
              itaque tempora blanditiis? Corrupti, nobis.
            </p>
          </div>
          <div className="col-6">
            <div className="text-end flex-column">
              <p>
                <i class="fa-solid fa-location-pin"></i>MAIN ROAD, BUILDING
                NAME, COUNTRY
              </p>
              <p>
                <i class="fa-solid fa-message"></i>INFO@COMPANYNAME.COM
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <p>&copy;COMPANY NAME 2020. ALL RIGHTS RESERVED.</p>
          </div>

          <div>
            <a href="#">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      </div>
    </>
  );
}

export default Footer;
