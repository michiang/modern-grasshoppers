var React = require('react');

var PauseButton = (props) => {
  return (
    <div className="start-time">
      <button className = "btn btn-default" onClick={props.onPauseButtonClick} > PAUSE </button>
    </div>
  );
}

window.PauseButton = PauseButton;