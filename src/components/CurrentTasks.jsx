import React from 'react';

var CurrentTasks = (props) => {

  return (
    <div className="current-task">
        <div className="task-entry-task">{props.task}</div>
        {/* Timer? */}
        <div className="task-entry-time">{props.time}</div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

CurrentTasks.propTypes = {
  task: React.PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.CurrentTasks = CurrentTasks;
