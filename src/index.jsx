"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var Layout = require('Layout.jsx').default;
var App = require('./components/App.jsx');
var UserSignIn = require('./components/UserSignIn.jsx');

console.log('INSIDE INDEX.JS');

var app = document.getElementById('app');

var routes = (
    <Route path="/" component={Layout}>
      <IndexRoute component={App}></IndexRoute>
      <Route path="signin" component={UserSignIn} />
      <Route path="tasks" component={CompletedTaskList} />
      <Route path="create" component={TaskEntry} />
    </Route>
);

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
app);

//ReactDOM.render(<App />, document.getElementById('app'));

// test works
// ReactDOM.render(
//   <h1>You Really Did It!!</h1>,
//   document.getElementById('app')
// );
