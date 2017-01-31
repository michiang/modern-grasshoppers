var React = require('react');

var SubmitButton = (props) => {
  return (
    <div className="submit">
      <button className = "btn btn-default" onClick={props.handleSubmit} > Create </button>
    </div>
  );
}

window.SubmitButton = SubmitButton;