import React from 'react';

var TasksLayout = (props) => (

      <div>
      {this.props.children && React.cloneElement(this.props.children, {
              postDataToServer: this.postDataToServer.bind(this),
              onStartButtonClick: this.onStartButtonClick.bind(this),
              onStopButtonClick: this.onStopButtonClick.bind(this),
              handleChange: this.handleChange.bind(this),
              handleSubmit: this.handleSubmit.bind(this),
              handleUsernameChange: this.handleUsernameChange.bind(this),
              postToSignin: this.postToSignin.bind(this),
              postToSignup: this.postToSignup.bind(this),
              signout: this.signout.bind(this),
              loadDataFromServer: this.loadDataFromServer.bind(this),
              appState: this.state
            })}



      Signed in as {props.state.currentUser}
      <div className='container content'>
        <div>
          <UserSignout
            signout={props.signout.bind(this)}
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
            task={props.state.currentTaskArray}
            onStartButtonClick={props.onStartButtonClick}
            onStopButtonClick={props.onStopButtonClick}
          />

        </div>

        <div className='container tasks'>
          <CompletedTaskList
            tasks={props.state.tasks}
          />

        </div>
      </div>
      </div>
)

//window.Layout = Layout;
export default TasksLayout;