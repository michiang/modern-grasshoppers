var React = require('react');

var SubmitButton = (props) => {
  return (
    <div className="submit">
      <button className = "btn btn-default" onClick={props.onSubmitButtonClick} > START </button>
    </div>
  );
}

window.SubmitButton = SubmitButton;