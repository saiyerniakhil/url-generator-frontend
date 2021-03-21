import { useState } from "react";

const MessageSubmitForm = ({ handleNotification }) => {
  const [textArea, setTextArea] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [timeType, setTimeType] = useState("seconds");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // converting time into seconds
    let timeInSeconds;
    if (timeType === "days") {
      timeInSeconds = timeInput * 24 * 60 * 60;
    } else if (timeType === "hours") {
      timeInSeconds = timeInput * 60 * 60;
    } else if (timeType === "minutes") {
      timeInSeconds = timeInput * 60;
    } else if (timeType === "seconds") {
      timeInSeconds = timeInput;
    }
    const request = {
      message: textArea,
      time: timeInSeconds
    };
    let data;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try {
      const response = await fetch(
        `https://url-generator-saiyerniakhil.herokuapp.com/add`,
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(request)
        }
      );
      data = await response.json();
    } catch (error) {
      data = null;
    }
    handleNotification(data);
    setTextArea("");
    setTimeInput("");
    setTimeType("seconds");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <textarea
          className="form-control"
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          placeholder="Enter you secret message📃 or a link🔗"
          id=""
          cols="10"
          rows="5"
          required
        ></textarea>
        <small className="form-text text-muted">
          Only 250 characters supported
        </small>
      </div>
      <div className="form-group">
        <input
          value={timeInput}
          onChange={(e) => setTimeInput(e.target.value)}
          className="form-control"
          placeholder="Enter Time"
          required
          type="number"
        />
      </div>
      <div className="form-group">
        <select
          value={timeType}
          onChange={(e) => setTimeType(e.target.value)}
          className="form-control"
        >
          <option value="seconds">Seconds</option>
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
          <option value="days">Days</option>
        </select>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="Generate Link 🔗"
          className="btn btn-primary form-control"
        />
      </div>
    </form>
  );
};

export default MessageSubmitForm;
