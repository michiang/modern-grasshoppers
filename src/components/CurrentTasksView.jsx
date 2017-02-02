var React = require('react');

var CurrentTasksView = (props) => {
  return (
    <div className="task list">
    {props.task.map((task) =>
      <div>
        <CurrentTasks
          task={task}
          //time={task.total_time}
          //key={task.id}
        />
        <div>Timer: {props.timer}</div>
        <StartButton onStartButtonClick = {props.onStartButtonClick}/>
        <PauseButton onPauseButtonClick = {props.onPauseButtonClick}/>
        <StopButton onStopButtonClick = {props.onStopButtonClick}/>
      </div>
    )}
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

CurrentTasksView.propTypes = {
  task: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.CurrentTasksView = CurrentTasksView;