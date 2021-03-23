import { Link } from "react-router-dom";
import HeroImage from "../../components/HeroImage";

const ErrorPage = ({ result }) => {
  return (
    <>
      <div className="container">
        <HeroImage imageName="notfound" />
        {result === null && (
          <>
            {" "}
            <div data-testid="info-card-test-error" className="card mb-5">
              <div className="card-header text-left">Oops!</div>
              <div className="card-body">
                Your message couldn't be found, might be expired! No problem,
                you can send you own message <Link to="/">here!</Link>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default ErrorPage;
