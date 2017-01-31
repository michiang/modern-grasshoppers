var React = require('react');

var StopButton = (props) => {
  return (
    <div className="stop-time">
      <button className = "btn btn-default" onClick = {props.onStopButtonClick}> STOP </button>
    </div>
  );
}

window.StopButton = StopButton;