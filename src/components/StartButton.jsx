var React = require('react');

var StartButton = (props) => {
  return (
    <div className="start-time">
      <button className = "btn btn-default" onClick = {() => {props.onStartButtonClick}> START </button>
    </div>
  );
}

window.StartButton = StartButton;