import React from 'react';

var TasksLayout = (props) => (

    <div>
      <h4 className='username'>Signed in as {props.currentUser}</h4>
      <div className='container content'>
        <div>
          <UserSignout
            signout={props.signout}
          />
        </div>

        <div className='container form'>
          <TaskEntry
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
          />
        </div>

        { /*TODO: Change className?*/ }
        <div className="container tasks">
          <CurrentTasksView
            tasks={props.currentTaskArray}
            onStartButtonClick={props.onStartButtonClick}
            onStopButtonClick={props.onStopButtonClick}
          />
        </div>

        <div className='container tasks'>
          <CompletedTaskList
            tasks={props.tasks}
          />
        </div>
      </div>
    </div>
)
//window.Layout = Layout;
export default TasksLayout;