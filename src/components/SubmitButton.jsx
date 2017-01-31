var React = require('react');

var SubmitButton = (props) => {
  return (
    <div className="submit">
      <button className = "btn btn-default" onClick={props.onSubmitButtonClick} > Create </button>
    </div>
  );
}

window.SubmitButton = SubmitButton;