var React = require('react');

var TaskEntry = (props) => {
  return (
    <div>
      <form >
        <input type='text' onChange={props.handleChange} value={props.currentTask} />
        <div className='buttons'>
          <StartButton onStartButtonClick = {props.onStartButtonClick}/>
          <StopButton onStopButtonClick = {props.onStopButtonClick}/>
        </div>
      </form>
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

TaskEntry.propTypes = {
  task: React.PropTypes.string.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.TaskEntry = TaskEntry;
