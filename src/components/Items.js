function Items() {
  return (
    <>
      <div className="container-fluid">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                This card has supporting text below as a natural.

                </p>

                <button className="btn btn-danger">ORDER NOW</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural.
                </p>
                <button className="btn btn-danger">ORDER NOW</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                This card has supporting text below as a natural.

                </p>
                <button className="btn btn-danger">ORDER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
