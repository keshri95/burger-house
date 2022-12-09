function Login() {
  return (
    <>
      <div className="container my-4">
        <div className="text-center">
          <p>RESERVATION</p>
          <p className="fs-2">BOOK YOUR TABLE</p>
        </div>
        <form>
          <div className="row justify-content-center">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col-4">
              <div className="d-grid gap-2 mx-auto">
                <button className="btn btn-danger">FIND A TABLE</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
