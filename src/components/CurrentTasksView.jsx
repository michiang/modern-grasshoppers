var React = require('react');

var CurrentTasksView = (props) => {
  return (
    <div className="task list">
    {props.task.map((task) =>
      <div>
        <CurrentTasks
          task={props.task}
          //time={task.total_time}
          //key={task.id}
        />
        {console.log(props)}
        <StartButton onStartButtonClick = {props.onStartButtonClick}/>
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