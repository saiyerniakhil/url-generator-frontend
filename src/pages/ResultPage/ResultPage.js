import HeroImage from "../../components/HeroImage";

const ResultPage = ({ result }) => {
  return (
    <>
      <div data-testid="result-page-test" className="container">
        <HeroImage imageName="found" />
        <div data-testid="info-card-test-result" className="card mb-5">
          <div className="card-header text-left">Your message</div>
          <div className="card-body">{result.message}</div>
          <div data-testid="info-card-data-test-result" className="card-footer">
            Your message expires at {new Date(result.expireAt).toLocaleString()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
