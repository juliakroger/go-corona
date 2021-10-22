import SupportNumbersImage from "../images/support-numbers.png";
import SupportVideoImage from "../images/support-video.png";

const Support = () => {
  return (
    <div className="support" id="support">
      <img
        src={SupportNumbersImage}
        alt="support-numbers"
        className="image"
      ></img>

      <div className="row">
        <div className="support-content-box">
          <div className="title">
            Talk to <span className="health">experts.</span>
          </div>
          <div className="subtitle">
            Book appointments or submit queries into thousands of forums
            concerning health issues and prevention against noval Corona Virus.
          </div>
          <button className="default-button">Features</button>
        </div>

        <img
          className="image-box"
          src={SupportVideoImage}
          alt="support-video"
        ></img>
      </div>
    </div>
  );
};

export default Support;
