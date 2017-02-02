//"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import CheckLoggedIn from './components/CheckLoggedIn.jsx'

var Layout = require('./pages/Layout.jsx').default;
//var App = require('./components/App.jsx').default;
//var UserSignIn = require('./components/UserSignIn.jsx');
//var UserSignUp = require('./components/UserSignUp.jsx');

console.log('INSIDE INDEX.JS');

var app = document.getElementById('app');

var routes = (
    <Route path="/" component={Layout}>
      <IndexRoute component={Layout}></IndexRoute>
      <Route path="signin" component={UserSignIn} />
      <Route path="signup" component={UserSignUp} />
      <Route component={CheckLoggedIn}>
        <Route path="tasks" component={App} />
      </Route>
    </Route>
);

// ReactDOM.render(
//   <Router history={hashHistory}>{routes}</Router>,
// app);

ReactDOM.render(<App />, document.getElementById('app'));

// test works
// ReactDOM.render(
//   <h1>You Really Did It!!</h1>,
//   document.getElementById('app')
// );
