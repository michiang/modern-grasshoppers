import React from 'react';

var TaskEntry = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type='text' placeholder = 'What do you need to do?' onChange={props.handleChange} value={props.activeTask} required/>
        <div className='buttons'>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

TaskEntry.propTypes = {
  task: React.PropTypes.string
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.TaskEntry = TaskEntry;
