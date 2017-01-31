import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tasks: [],
      currentTask: '',
      start_time: Date,
      started: false,
      //stop: true
    }

    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onStartButtonClick = this.onStartButtonClick.bind(this);
    this.onStopButtonClick = this.onStopButtonClick.bind(this);
  }

  //Ajax get request needs to be wrapped in a function
  //so that the request can be called every time
  //componentdidMount is invoked
  //Loads data from API
  loadDataFromServer() {
    //REFACTOR to get data from just the signed in user..........
    $.get('/tasks/:user', function(data) {
      console.log(data);
      //global.allData = data;
      this.setState({tasks: data});
    });
  }

  //Post data to the server only when the stop button event handler
  //is triggered
  postDataToServer() {
    console.log('INSIDE POST', this.state);
    $.post('/tasks/:user'),
    {
      task: this.state.currentTask,
      start_time: this.state.start_time,
      end_time: Date.now(),
    },
    function (data) {
      console.log(data);
    }
  }

  onStopButtonClick(e) {
    this.postDataToServer();
    console.log('STOP STATE', this.state);
    //reset state
    this.setState({
      //currentTask: '',
      started: false,
      //stop: true
    });
  };

  // handleSubmit(e) {
  //   e.preventDefault()
  //   //this.setState({body: })
  // }

  handleChange(event) {
    console.log('CHANGE STATE', this.state);
    this.setState({currentTask: event.target.value});
  }

  onStartButtonClick(event)  {
    this.setState({
      start_time: Date.now(),
      started: true,  //so we can prevent another task from being created
      //stop: false
    });
    console.log('EVENT', event);
    console.log('START STATE', this.state);
  };

  componentdidMount() {
    this.loadDataFromServer();
  }

  render() {
    return(
      <div>
      <div className='container content'>
        <div className='container form'>

          <TaskEntry
            task={this.state.currentTask}
            handleChange={this.handleChange.bind(this)}
            onStopButtonClick={this.onStopButtonClick.bind(this)}
            onStartButtonClick={this.onStartButtonClick.bind(this)}
          />
        </div>
        <div className='container tasks'>
          <TaskList
            tasks={this.state.tasks}
          />
        </div>
      </div>
      </div>
    );
  }
}


window.App = App;

