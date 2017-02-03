//"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
//import routes from './components/routes.jsx'
import CheckLoggedIn from './components/CheckLoggedIn.jsx'
//import App from './components/App.jsx'
//import UserSignIn from './components/UserSignIn.jsx'
//import UserSignUp from './components/UserSignUp.jsx'
import Layout from './pages/Layout.jsx'

var app = document.getElementById('app');

// var routes = (
//     <Route path="/" component={App}>

//       <Route path="signin" component={UserSignIn} />
//       <Route path="signup" component={UserSignUp} />
//       <Route path='tasks' component={Layout} onEnter={requireAuth} />
//       <Route path="layout" component={NamedComponents}>
//         <IndexRoute components={{ taskEntry: TaskEntry, currentTasks: CurrentTasks, completedTaskList: CompletedTaskList }} />
//       </Route>

//       <Route path='*' component={NotFound} />
//     </Route>
// );

var routes = (
    <Route path="/" component={App}>

      <Route path="signin" component={UserSignIn} />
      <Route path="signup" component={UserSignUp} />
      <Route component={CheckLoggedIn}>
        <Route path="layout" component={Layout} />
      </Route>
      <Route path="tasks" component={NamedComponents}>
        <IndexRoute components={{ taskEntry: TaskEntry, currentTasks: CurrentTasks, completedTaskList: CompletedTaskList }} />
      </Route>

      <Route path='*' component={NotFound} />
    </Route>
);

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

const NamedComponents = (props) => (
  <div>
    {this.props.children}
    {this.props.children.taskEntry}<br />
    {this.props.children.currentTasks}<br />
    {this.props.children.completedTaskList}
  </div>
);

function createElement(Component, props) {
    console.log('INSIDE CREATE ELEMENT', Component, props);
   // Add myprop to props for all route components
   // _.extend(props, {myprop: "foo"})
  return <Component {...props}/>
}

function requireAuth(nextState, replace, callback) {
  console.log('requireAuth isLoggedIn', App.isLoggedIn);
  if (App.isLoggedIn === undefined || App.isLoggedIn === false) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
app);

//ReactDOM.render(<App />, document.getElementById('app'));
