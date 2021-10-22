import { Header } from "./";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background"></div>
      <Header />

      <div className="home">
        <div className="title">Take care of yours</div>
        <div className="title">
          family's <span className="health">health.</span>
        </div>
        <div className="subtitle">
          All in one destination for COVID-19 health queries.
        </div>
        <div className="subtitle">
          Consult 10,000+ health workers about your concerns.
        </div>

        <button className="default-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
