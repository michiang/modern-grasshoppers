import React from 'react';
import {Link} from 'react-router';

class Layout extends React.Component {
  navigate() {
    this.props.history.push(null, '/');
  }

  render() {
    return(
      <div id='main-nav'>
        <h1>What have I done?!</h1>
        <nav>
          <ul role='nav'>
            <li><Link to='/signin'>Sign In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/tasks'>Tasks</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

window.Layout = Layout;