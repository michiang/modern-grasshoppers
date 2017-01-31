var React = require('react');

var UserSignIn = (props) => {
  return (
    <div className="task input">
      <form>
        <input type='text' id='username' placeholder = 'username' />
        <input type='text' id='userpw' placeholder = 'password' />
        <button></button>
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
