import React from 'react';

var PauseButton = (props) => {
  return (
    <div className="pause timer btn">
      <button className = "btn btn-default" onClick={(e) => {
        props.onPauseButtonClick(e)
      }} > PAUSE </button>
    </div>
  );
}

window.PauseButton = PauseButton;