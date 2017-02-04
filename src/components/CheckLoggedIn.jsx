import React from 'react';
import $ from 'jquery';

class CheckLoggedIn extends React.Component {
  // constructor (props) {
  //   super(props);

  //   this.state = {
  //     isAuth: false
  //   }
  // }

  componentDidMount() {
    //this.props.isLoggedIn = requireAuth();
    var isAuth = requireAuth();
    console.log('this.props.isLoggedIn', this.props.isLoggedIn, isAuth);

    if (!this.props.isLoggedIn) {
      console.log('CheckLoggedIn = false', this.props.isLoggedIn, isAuth);
      this.props.router.replace('/signin');
      //browserHistory.replace("/signin")
    } else {
      console.log('CheckLoggedIn = true', this.props.isLoggedIn, isAuth);
      this.props.router.replace('/tasks');
    }
  }

  render() {
    // if (this.props.isLoggedIn) {
    //   console.log('CheckLoggedIn = true', this.props.isLoggedIn);
    //   //this.props.router.replace('/tasks');
      return (
        this.props.children && React.cloneElement(this.props.children, {
              postDataToServer: this.props.postDataToServer,
              onStartButtonClick: this.props.onStartButtonClick,
              onStopButtonClick: this.props.onStopButtonClick,
              handleChange: this.props.handleChange,
              handleSubmit: this.props.handleSubmit,
              handleUsernameChange: this.props.handleUsernameChange,
              postToSignin: this.props.postToSignin,
              postToSignup: this.props.postToSignup,
              signout: this.props.signout,
              loadDataFromServer: this.props.loadDataFromServer,
              tasks: this.props.tasks,
              currentTask: this.props.currentTask,
              currentTaskArray: this.props.currentTaskArray,
              start_time: this.props.start_time,
              started: this.props.started,
              passwordInSignin: this.props.passwordInSignin,
              usernameInSignin: this.props.usernameInSignin,
              usernameInSignup: this.props.usernameInSignup,
              passwordInSignup: this.props.passwordInSignup,
              currentUser: this.props.currentuser,
              isLoggedIn: this.props.isLoggedIn
            })
      );
    // } else {
    //   return null
    //}
  }
}

function requireAuth () {
    //console.log('INSIDE REQUIRE AUTH', App);
    var isAuth;
    //var that = App;
    $.ajax({
      type: 'GET',
      url: '/tasks',
      success: function(data) {
        isAuth = true;
        console.log('POST AUTH SUCCESS', isAuth);
      },
      error: function(error) {
        //console.log('SIGN-IN FAILURE STATE', that.state);
        isAuth = false;
        console.log('POST AUTH OOPS!', isAuth);
      },
      contentType: 'application/json',
      dataType: 'json'
    });

    return isAuth;
}

export default CheckLoggedIn