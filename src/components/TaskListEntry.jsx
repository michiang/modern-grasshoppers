var React = require('react');

var TaskListEntry = (props) => {

  return (
    <div className="task list entry">
      <div className="list-body completed">
        <div className="task-entry-task">{props.task}</div>
        <div className="task-entry-time">{props.time}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

TaskListEntry.propTypes = {
  task: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.TaskListEntry = TaskListEntry;
