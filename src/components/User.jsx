var React = require('react');

class User extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username: username,
      tasks: tasks,
      signed_in: false
    }
  }

  render() {
    return(
      <div className='container user'>
        <TaskList
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}



window.User = User;

