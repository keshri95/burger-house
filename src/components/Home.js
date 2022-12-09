import Discover from "./Discover";
import Footer from "./Footer";
import Items from "./Items";
import Login from "./Login";
import Navbar from "./Navbar";
import Section from "./Section";

function Home() {
  return (
    <>
      <Navbar />

      {/* header */}
      <div className="mb-2">
        <div className="card text-bg-dark">
          <img
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            className="card-img"
            alt="..."
            style={{height:"65vh"}}
          />
          <div className="card-img-overlay">
            <div className="container">
              <p className="display-2 card-title">BURGER</p>
              <p classNameName="display-1 card-title">WEEK</p>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Section />

      {/* ALWAYS TASTY BURGER */}

      <div className="container">
        <div className="text-center py-3">
          <span className="fs-4 bg-warning">ALWAYS TASTY BURGER</span>
          <p className="fs-2 fw-bold">CHOOSE & ENJOY</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum,
            possimus, aliquam veritatis laboriosam tenetur eveniet sapiente
            dignissimos voluptatibus at nobis tempora repellendus eos itaque
            asperiores nam quidem nulla! Repellendus.
          </p>
        </div>
      </div>

      <Items />
      <Discover />
      <Login />
      <Footer />
    </>
  );
}

export default Home;
