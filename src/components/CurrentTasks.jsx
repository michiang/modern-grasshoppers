import React from 'react';
import moment from 'moment';

var CurrentTasks = (props) => {

  return (
    <div className="current-task">
        <div className="task-entry-task">Task: <span>{props.task}</span></div>
        <div className="task-entry-project">Project: <span>{props.project}</span></div>
        <div className="task-entry-date">Start: <span>{moment(props.start_time).format("ddd, MMM Do YY, h:mm a")}</span></div>
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
