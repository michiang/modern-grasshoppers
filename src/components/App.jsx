var React = require('react');

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tasks: tasks,
      start: false,
      stop: false
    }
  }

  render() {
    return(
      <div className='container content'>
        <div className='container form'>
          <TaskEntry />
        </div>
        <div className='container tasks'>
          <TaskList
            tasks={this.state.tasks}
          />
        </div>
      </div>
    );
  }
}



window.App = App;

