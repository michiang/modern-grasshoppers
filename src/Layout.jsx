var React = require('react');
var Link = require('react-router');

class Layout extends React.Component {
  navigate() {
    this.props.history.push(null, '/');
  }

  render() {
    return(
      <div id='main'>
        <h1>What have I done?!</h1>
        <Link to='signin'>Sign In</Link>
        <Link to='tasks'>Tasks</Link>
        {this.props.children}
      </div>
    );
  }
}

window.Layout = Layout;