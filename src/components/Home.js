import Navbar from "./Navbar";
import Section from "./Section";

function Home() {
  return (
    <>
      <Navbar />
      <Section />

      {/* ALWAYS TASTY BURGER */}

      <div className="container">
        <div className="text-center py-3">
          <span className="fs-4 bg-warning">ALWAYS TASTY BURGER</span>
          <p className="fs-2 fw-bold">CHOOSE & ENJOY</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum, possimus, aliquam veritatis laboriosam tenetur eveniet sapiente dignissimos voluptatibus at nobis tempora repellendus eos itaque asperiores nam quidem nulla! Repellendus.</p>
        </div>
      </div>

      
    </>
  );
}

export default Home;
