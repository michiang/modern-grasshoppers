//"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
//import routes from './components/routes.jsx'
import CheckLoggedIn from './components/CheckLoggedIn.jsx'
import Layout from './pages/Layout.jsx'

//var App = require('./components/App.jsx').default;
//var UserSignIn = require('./components/UserSignIn.jsx');
//var UserSignUp = require('./components/UserSignUp.jsx');

var app = document.getElementById('app');

var routes = (
    <Route path="/" component={Layout}>
      <Route component={CheckLoggedIn}>
        <IndexRoute component={App} />
        <Route path="/signin" component={UserSignIn} />
        <Route path="/signup" component={UserSignUp} />
        <Route path="/tasks" component={App} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
);

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

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
