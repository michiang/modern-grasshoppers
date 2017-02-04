import React from 'react';

var CompletedTaskListItems = (props) => {
  return (
    <div className="task list entry">
      <div className="list-body">
        <div className="task-entry-project">Project: {props.project}</div>
        <div className="task-entry-task" id={props._id}>Task: {props.task}</div>
        <div className="task-entry-time">Total Time: {props.time}</div>
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
