import InstructionComponent from "../../components/InstructionComponent";
import MessageSubmitForm from "../../components/MessageSubmitForm";
import NotificationComponent from "../../components/NotificationComponent";
import HeroImage from "../../components/HeroImage";
import { useState } from "react";

const HomePage = () => {
  const [formSubmitResponse, setFormSubmitResponse] = useState(null);
  function handleNotification(data) {
    setFormSubmitResponse(data);
  }
  return (
    <>
      <HeroImage imageName={"homepage"} />
      <div className="container">
        <div className="row mt-5" id="FormSection">
          <div className="col-12 col-lg-8 mb-3">
            <MessageSubmitForm handleNotification={handleNotification} />
          </div>
          <div className="col-12 col-lg-4 mb-3">
            {formSubmitResponse !== null && (
              <NotificationComponent
                response={formSubmitResponse}
                type="primary"
                message="Hello, There!"
                url="https://www.google.co.in"
              />
            )}
            <InstructionComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
