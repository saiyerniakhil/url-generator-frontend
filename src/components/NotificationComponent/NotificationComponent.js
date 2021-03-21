const NotificationComponent = ({ response, type, message }) => {
  const resultUrl =
    response !== null && `https://fxjlf.csb.app/result/${response.uniqueUrl}`;
  const urlComponent = (
    <a className="text-center" href={resultUrl}>
      {resultUrl}
    </a>
  );

  const handleCopy = (e, url) => {
    e.preventDefault();
    navigator.clipboard.writeText(url);
  };
  console.log(response);
  return (
    <div className={`alert alert-${type}`}>
      <h4> {message} </h4>
      <span>
        {resultUrl && "Here is the link to the text "}
        {resultUrl && urlComponent}
        <button onClick={(e) => handleCopy(e, resultUrl)} className="btn">
          <small>Copy</small>
        </button>
      </span>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default NotificationComponent;
