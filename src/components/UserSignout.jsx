import React from 'react';

var UserSignout = (props) => {
  return (
    <div className="signout input">
      <form onSubmit={props.signout}>
        <button>Sign Out</button>
      </form>
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

UserSignout.propTypes = {
  user: React.PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.UserSignout = UserSignout;