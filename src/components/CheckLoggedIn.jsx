import React from 'react';
import $ from 'jquery';

class CheckLoggedIn extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isAuth: false
    }
  }

  componentDidMount() {
    this.isAuth = requireAuth();

    if (!this.isAuth) {
      console.log('CheckLoggedIn = false', this.isAuth);
      this.props.history.replace('/signin');
      //browserHistory.replace("/signin")
    }
  }

  render() {
    if (this.isAuth) {
      console.log('CheckLoggedIn = true', isAuth);
      //this.props.router.replace('/tasks');
      return this.props.children
    } else {
      return null
    }
  }
}

function requireAuth () {
    //console.log('INSIDE REQUIRE AUTH', App);
    var isAuth;
    //var that = App;
    $.ajax({
      type: "POST",
      url: '/tasks',
      success: function(data) {
        console.log('POST AUTH SUCCESS', data);
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