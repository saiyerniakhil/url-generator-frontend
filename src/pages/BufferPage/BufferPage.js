import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/Loader";
import ResultPage from "../ResultPage";
import ErrorPage from "../ErrorPage";

const BufferPage = (props) => {
  const [responseObject, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { uuid } = useParams();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let data;
      try {
        console.log("true");
        data = await fetch(
          `https://url-generator-saiyerniakhil.herokuapp.com/retrieve/${uuid}`
        );
        data = await data.json();
      } catch (error) {
        data = null;
      }
      setResponse(data);
    }
    fetchData();
    setIsLoading(false);
  }, [uuid]);

  return (
    <div>
      <div className="container">
        {isLoading && <Loader />}
        {responseObject !== null ? (
          <ResultPage result={responseObject} />
        ) : (
          <ErrorPage result={responseObject} />
        )}
      </div>
    </div>
  );
};

export default BufferPage;
