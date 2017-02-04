import React from 'react';

var PauseButton = (props) => {
  return (
    <div className="pause timer btn">
      <button className = "btn btn-default" onClick={props.onPauseButtonClick} > PAUSE </button>
    </div>
  );
}

window.PauseButton = PauseButton;