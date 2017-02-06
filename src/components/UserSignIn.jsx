import React from 'react';

var UserSignIn = (props) => {
  return (
    <div className="signin input">
      <h4 className='username'>Sign In:</h4>
      <form onSubmit={props.postToSignin}>
        <input type='text' id='username' placeholder = 'username' name='usernameInSignin' onChange={props.handleUsernameChange} required/>
        <input type='password' id='userpw' placeholder = 'password' name='passwordInSignin' onChange={props.handleUsernameChange} required/>
        <button>Sign In</button>
        <IncorrectLogin displayMessage={props.incorrectLogin} message={'Not a valid username and password combination'}/>
      </form>
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

UserSignIn.propTypes = {
  user: React.PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.UserSignIn = UserSignIn;