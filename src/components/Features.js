import FeatureImage from "../images/features.png";

const Features = () => {
  return (
    <div className="features" id="features">
      <img src={FeatureImage} alt="features" className="image"></img>

      <div>
        <div className="title">Stay safe with</div>
        <div className="title">
          Go<span className="corona">Corona</span>
        </div>
        <div className="subtitle">
          24x7 Support and user friendly mobile platform to bring healthcare to
          your fingertips. Signup and be a part of the new health culture.{" "}
        </div>
        <button className="default-button">Features</button>
      </div>
    </div>
  );
};

export default Features;
