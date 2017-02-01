var React = require('react');

var UserSignIn = (props) => {
  return (
    <div className="signin input">
      Sign In
      <form onSubmit={props.postToSignin}>
        <input type='text' id='username' placeholder = 'username' name='usernameInSignin' onChange={props.handleUsernameChange}/>
        <input type='password' id='userpw' placeholder = 'password' name='passwordInSignin' onChange={props.handleUsernameChange}/>
        <button>Sign In</button>
      </form>
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

UserSignIn.propTypes = {
  user: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.UserSignIn = UserSignIn;