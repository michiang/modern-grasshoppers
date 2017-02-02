import React from 'react';
import {Link} from 'react-router';
import App from '../components/App.jsx'

class Layout extends React.Component {
  navigate() {
    this.props.history.push(null, '/');
  }

  render() {
    return(
      <div id='main-nav'>
        <nav>
          <ul role='nav'>
            <li><Link to='/' onlyActiveOnIndex>Home</Link></li>
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

//window.Layout = Layout;
export default Layout