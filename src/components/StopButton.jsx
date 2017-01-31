var React = require('react');

var StopButton = (props) => {
  return (
     <div className="start-time">
      <button className = "btn btn-default" onClick = {() => {props.onStopButtonClick}> STOP </button>
    </div>
  );
}

window.StopButton = StopButton;