import React from 'react';

var StopButton = (props) => {
  return (
    <div className="stop timer btn">
      <button className = "btn btn-default" onClick = {(e) => {
        props.onStopButtonClick(e)
      }}> STOP </button>
    </div>
  );
}

window.StopButton = StopButton;