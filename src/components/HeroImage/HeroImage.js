import "./index.css";
import Homepage from "../../assets/homepage.png";
import Notfound from "../../assets/notfound.png";
import Found from "../../assets/found.png";

const HeroImage = ({ imageName }) => {
  const imageSrc =
    imageName === "homepage"
      ? Homepage
      : imageName === "found"
      ? Found
      : Notfound;
  return (
    <div className="hero-image">
      <img src={imageSrc} alt={imageName} />
      {imageName === "homepage" && (
        <>
          <h3 data-testid="hero-text-test" className="hero-text">Welcome to URL Generator</h3>
        </>
      )}
    </div>
  );
};

export default HeroImage;
