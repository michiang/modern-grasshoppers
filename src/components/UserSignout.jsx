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

UserSignout.propTypes = {
  user: React.PropTypes.object
};

window.UserSignout = UserSignout;