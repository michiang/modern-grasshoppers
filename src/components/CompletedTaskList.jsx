var React = require('react');

var CompletedTaskList = (props) => {
  return (
    <div className="task list">
    {props.tasks.map((task) =>
      <CompletedTaskListItems
        task={task.task}
        time={task.total_time}
        project = {task.project}
        key={task.id}
      />
    )}
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

CompletedTaskList.propTypes = {
  tasks: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.CompletedTaskList = CompletedTaskList;
