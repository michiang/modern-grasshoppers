// import React from 'react';

// var StartButton = (props) => {
//   return (
//     <div className="start timer btn">
//       <button className = "btn btn-default" onClick={props.onStartButtonClick} > START </button>
//     </div>
//   );
// }

// window.StartButton = StartButton;


import React from 'react';

var StartButton = (props) => {
  return (
    <div className="start timer btn">
      <button className = "btn btn-default" onClick={(e) => {
        props.onStartButtonClick(e)
      }} > START </button>
    </div>
  );
}

window.StartButton = StartButton;