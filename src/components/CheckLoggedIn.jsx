import React from 'react';

class CheckLoggedIn extends React.Component {
  componentDidMount() {
    //const { currentURL } = this.props

    if (!App.isLoggedIn) {
      console.log('CheckLoggedIn = false', App.isLoggedIn);
      this.props.router.replace('/signin');
      //browserHistory.replace("/login")
    }
  }

  render() {
    if (App.isLoggedIn) {
      console.log('CheckLoggedIn = true', App.isLoggedIn);
      this.props.router.replace('/tasks');
      return this.props.children
    } else {
      return null
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are using React Router, you can use `ownProps` to find the URL.
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.loggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default CheckLoggedIn