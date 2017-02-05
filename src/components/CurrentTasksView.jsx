import React from 'react';

var CurrentTasksView = (props) => {
  return (
    <div className="task list entry">
    <h4>Current Tasks:</h4>
    {props.tasks.map((task) =>
      <div className="list-body">
        <CurrentTasks
          key={task._id}
          task={task.task}
          project={task.project}
          start_time = {task.start_time}
          secondsElapsed={task.secondsElapsed}
        />
        <StopButton onStopButtonClick = {props.onStopButtonClick.bind(this, task)}/>
        <StartButton onStartButtonClick = {props.onStartButtonClick.bind(this, task)}/>
      </div>
    )}
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

CurrentTasksView.propTypes = {
  tasks: React.PropTypes.array
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.CurrentTasksView = CurrentTasksView;