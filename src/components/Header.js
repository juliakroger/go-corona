import CovidLogo from "../images/covid-logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={CovidLogo} alt="covid logo" width="30px"></img>

      <div>
        <span className="go">Go</span>Corona
      </div>
    </div>
  );
};

const Header = () => {
  const goToLink = (id) => {
    if (!id) return;

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="header" id="home">
      <Logo />
      <div className="header--links">
        <button onClick={() => goToLink("home")} className="link">
          Home
        </button>
        <button onClick={() => goToLink("features")} className="link">
          Features
        </button>
        <button onClick={() => goToLink("support")} className="link">
          Support
        </button>
        <button onClick={() => goToLink("download")} className="link">
          Downlod
        </button>
      </div>
      <button onClick={() => goToLink("download")} className="download-button">
        Download
      </button>
    </div>
  );
};

export default Header;
