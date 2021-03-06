const InstructionComponent = () => {
  return (
    <div data-testid="instruction-test" className="text-left border">
      <h4 className="px-3 pt-3">How does it work?</h4>
      <hr style={{ width: "90%" }} />
      <ul>
        <li>
          Enter Link/Message of your choice{" "}
          <span role="img" aria-label="typeing">
            โจ
          </span>
        </li>
        <li>
          Set the time{" "}
          <span role="img" aria-label="time">
            โ
          </span>{" "}
          you want the message to disappear{" "}
          <span role="img" aria-label="charm">
            โจ
          </span>{" "}
          after
        </li>
        <li>
          Submit the form{" "}
          <span role="img" aria-label="mail">
            ๐ช
          </span>
        </li>
        <li>Therafter you'll get the link to the message</li>
        <li>
          Share the link with you friends{" "}
          <span role="img" aria-label="friends">
            ๐จโ๐งโ๐ฆ
          </span>
          , after the specified time, you'll not be able to access{" "}
          <span role="img" aria-label="not">
            ๐ซ
          </span>{" "}
          that message
        </li>
      </ul>
    </div>
  );
};

export default InstructionComponent;
