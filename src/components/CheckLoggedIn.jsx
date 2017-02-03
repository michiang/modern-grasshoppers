import React from 'react';
import $ from 'jquery';

class CheckLoggedIn extends React.Component {
  componentDidMount() {
    //const { currentURL } = this.props
    var isAuth = requireAuth();

    if (!isAuth) {
      console.log('CheckLoggedIn = false', App.isLoggedIn);
      this.props.history.replace('/signin');
      //browserHistory.replace("/login")
    }
  }

  render() {
    if (isAuth) {
      console.log('CheckLoggedIn = true', App.isLoggedIn);
      //this.props.router.replace('/tasks');
      return this.props.children
    } else {
      return null
    }
  }
}

var requireAuth = function () {
    //console.log('INSIDE REQUIRE AUTH', App);
    var isAuth;
    //var that = App;
    $.ajax({
      type: "POST",
      url: '/tasks',
      success: function(data) {
        console.log('POST SUCCESS', data);
        isAuth = true;
      },
      error: function(error) {
        //console.log('SIGN-IN FAILURE STATE', that.state);
        console.log('POST AUTH OOPS!', error);
        isAuth = false;
      },
      contentType: 'application/json',
      dataType: 'json'
    });

    App.isLoggedIn = isAuth;
    return isAuth;
}

export default CheckLoggedIn