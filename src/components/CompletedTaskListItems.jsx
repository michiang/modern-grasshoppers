import React from 'react';
import moment from 'moment';

var CompletedTaskListItems = (props) => {
  return (
    <div className="task list entry">
      <div className="list-body">
        <div className="task-entry-task" id={props.key}>Task: <span>{props.task}</span></div>
        <div className="task-entry-project">Project: <span>{props.project}</span></div>
        <div className="task-entry-date">Start: <span>{moment(props.start_time).format("ddd, MMM Do YY, h:mm a")}</span></div>
        <div className="task-entry-date">End: <span>{moment(props.end_time).format("ddd, MMM Do YY, h:mm a")}</span></div>
        <div className="task-entry-time">Total Time: <span>{props.time} min</span></div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

CompletedTaskListItems.propTypes = {
  task: React.PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.CompletedTaskListItems = CompletedTaskListItems;
