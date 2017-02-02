import React from 'react';

class CheckLoggedIn extends React.Component {
  componentDidMount() {
    //const { currentURL } = this.props
    requireAuth();

    if (!App.isLoggedIn) {
      console.log('CheckLoggedIn = false', App.isLoggedIn);
      this.props.router.replace('/signin');
      //browserHistory.replace("/login")
    }
  }

  render() {
    if (App.isLoggedIn) {
      console.log('CheckLoggedIn = true', App.isLoggedIn);
      //this.props.router.replace('/tasks');
      return this.props.children
    } else {
      return null
    }
  }
}

var requireAuth = function () {
    console.log('INSIDE POST', this.state);
    var that = this
    $.ajax({
      type: "GET",
      url: '/tasks',
      success: function(data) {
        console.log('POST SUCCESS', data);
        that.setState({
          passwordInSignin: "",
          currentUser: that.state.usernameInSignin,
          isLoggedIn: true
        })
        console.log('SIGN-IN SUCCESS STATE', that.state);
        that.loadDataFromServer();
      },
      error: function(error) {
        console.log('POST OOPS!', error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
}

export default CheckLoggedIn