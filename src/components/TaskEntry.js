var React = require('react');

var TaskEntry = (props) => {
  return (
    <div className="task input">
      <form>
        <input type='text' />
        <StartButton />
        <StopButton />
      </form>
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

TaskList.propTypes = {
  task: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.TaskEntry = TaskEntry;
