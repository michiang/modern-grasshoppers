var React = require('react');

var CompletedTaskListItems = (props) => {
  return (
    <div className="task list entry">
      <h2>Completed Task:</h2>
      <div className="list-body">
        <div className="task-entry-task">{props.task} <p>Total Time:</p></div>
        <div className="task-entry-time">{props.time}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

CompletedTaskListItems.propTypes = {
  task: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.CompletedTaskListItems = CompletedTaskListItems;
