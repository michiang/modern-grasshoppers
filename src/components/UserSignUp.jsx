var React = require('react');

var UserSignUp = (props) => {
  return (
    <div className="signup input">
      Sign Up
      <form onSubmit={props.postToSignup}>
        <input type='text' id='username' placeholder = 'username' name='usernameInSignup' onChange={props.handleUsernameChange} required/>
        <input type='password' id='userpw' placeholder = 'password' name='passwordInSignup' onChange={props.handleUsernameChange} required/>
        <button>Create Account</button>
        <IncorrectLogin displayMessage={props.usernameTaken} message={'Username is taken'}/>
      </form>
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

UserSignUp.propTypes = {
  user: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.UserSignUp = UserSignUp;
