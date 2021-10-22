import SymptomCheckImage from "../images/download-symptom-checker.png";
import NurseImage from "../images/download-nurse.png";
import HeartImage from "../images/download-heart.png";
import AppleStoreDownload from "../images/apple-store-download.png";
import GooglePlayDownload from "../images/google-play-download.png";

const Download = () => {
  return (
    <div className="download" id="download">
      <div className="title">
        <span className="healthcare">Healthcare</span> at your Fingertips.
      </div>
      <div className="subtitle">
        Bringing premium healthcare features to your fingertips. User friendly
        mobile platform to bring healthcare to your fingertips. Signup and be a
        part of the new health culture.
      </div>

      <div className="card-row">
        <div className="card">
          <div className="image">
            <img alt="symptom-checker" src={SymptomCheckImage} />
          </div>
          <div>
            <div className="card-title">Symptom Checker</div>
            <div className="card-subtitle">
              Check if you are infected by COVID-19 with our Symptom Checker
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img alt="nurse" src={NurseImage} />
          </div>
          <div>
            <div className="card-title">24x7 Medical support</div>
            <div className="card-subtitle">
              Consult with 10,000+ health workers about your concerns.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img alt="heart" src={HeartImage} />
          </div>
          <div>
            <div className="card-title">Conditions</div>
            <div className="card-subtitle">
              Bringing premium healthcare features to your fingertips.
            </div>
          </div>
        </div>
      </div>

      <div className="download-store-row">
        <img
          alt="google-play-download.png"
          src={GooglePlayDownload}
          className="download-store-button"
        />
        <img
          alt="apple-store-download"
          src={AppleStoreDownload}
          className="download-store-button"
        />
      </div>
    </div>
  );
};

export default Download;
