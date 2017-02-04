//"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import $ from 'jquery';
//import routes from './components/routes.jsx'
import CheckLoggedIn from './components/CheckLoggedIn.jsx'
//import App from './components/App.jsx'
//import UserSignIn from './components/UserSignIn.jsx'
//import UserSignUp from './components/UserSignUp.jsx'
import Layout from './pages/Layout.jsx'

var app = document.getElementById('app');

var routes = (
    <Route path="/" component={App}>

      <Route path="signin" component={UserSignIn} />
      <Route path="signup" component={UserSignUp} />
      <Route component={CheckLoggedIn}>
        <Route path="tasks" component={Layout} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
);

const NotFound = () => (
  <h1>404.. This page is not found!</h1>
)

// function requireAuth (nextState, replace, next) {
//     console.log('INSIDE REQUIRE AUTH', nextState, next);
//     var isAuth;
//     //var that = App;
//     $.ajax({
//       type: 'GET',
//       url: '/',
//       success: function(data) {
//         isAuth = true;
//         replace('/tasks');
//         console.log('AUTH SUCCESS', isAuth, data, nextState);
//         next();
//       },
//       error: function(error) {
//         //console.log('SIGN-IN FAILURE STATE', that.state);
//         isAuth = false;
//         replace('/signin');
//         console.log('AUTH OOPS!', isAuth, error, nextState);
//         next();
//       },
//       contentType: 'application/json',
//       dataType: 'json'
//     });
// }

// function requireAuth(nextState, replace, callback) {
//   console.log('requireAuth isLoggedIn', App.isLoggedIn);
//   if (App.isLoggedIn === undefined || App.isLoggedIn === false) {
//     replace({
//       pathname: '/signin',
//       state: { nextPathname: nextState.location.pathname }
//     })
//   }
// }

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
app);

//ReactDOM.render(<App />, document.getElementById('app'));
