// import React from 'react';
// import {Route, IndexRoute} from 'react-router';
// import CheckLoggedIn from './CheckLoggedIn.jsx'
// import Layout from '../pages/Layout.jsx'
// import UserSignIn from './UserSignIn.jsx'

// const NotFound = () => (
//   <h1>404.. This page is not found!</h1>)

// const NamedComponents = (props) => (
//   <div>
//     {props.taskEntry}<br />
//     {props.currentTasks}<br />
//     {props.completedTaskList}
//   </div>
// );

// module.exports = (
//   <Route path="/" component={App}>

//       <Route path="/signin" component={UserSignIn} postToSignin={this.postToSignin.bind(this)}
//             handleUsernameChange={this.handleUsernameChange.bind(this)} />

//       <Route path="/signup" component={UserSignUp} postToSignup={this.postToSignup.bind(this)}
//             handleUsernameChange={this.handleUsernameChange.bind(this)} />

//       <Route path="/tasks" component={NamedComponents}>
//           <IndexRoute components={{ taskEntry: TaskEntry, currentTasks: CurrentTasks, completedTaskList: CompletedTaskList }} />
//       </Route>

//       <Route path="/tasks" component={CheckLoggedIn}>
//           <TaskEntry
//             handleChange={this.handleChange.bind(this)}
//             handleSubmit={this.handleSubmit.bind(this)}
//           />
//           <CurrentTasksView
//             task={this.state.currentTaskArray}
//             onStartButtonClick={this.onStartButtonClick.bind(this)}
//             onStopButtonClick={this.onStopButtonClick.bind(this)}
//           />
//           <CompletedTaskList
//             tasks={this.state.tasks}
//           />
//       </Route>
//       <Route path='*' component={NotFound} />
//   </Route>

// );