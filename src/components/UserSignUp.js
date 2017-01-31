var React = require('react');

var UserSignUp = (props) => {
  return (
    <div className="task input">
      <form>
        <input type='text' id='username' />
        <input type='text' id='userpw' />
        <button></button>
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
