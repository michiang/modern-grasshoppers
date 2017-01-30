import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tasks: tasks,
      body: 'body'
      start: false,
      stop: false
    }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  //Ajax get request needs to be wrapped in a function
  //so that the request can be called every time
  //componentDidMount is invoked.
  //Loads data from API
  loadDataFromServer() {
    $.get('/users/tasks', function(data) {
      console.log(data);
      global.allData = data;
    });
  }

  //Post data to the server only when the stop button is clicked
  //and all data is gathered
  postDataToServer() {
    $("StopButton").click(function() {
      $.post('/users/tasks',
      {
        task: $("StopButton").val(),
        timer: "time"
      },
      function (data) {
        console.log(data);
      }
      })
    })
  }

  handleChange(event) {
    this.setState({task: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault()
    //this.setState({body: })
  }

  //When loading data form a remote endpoint, this method will
  //instantiate the newtwork request
  componentDidMount() {
    this.loadDataFromServer();
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
        <div>
          <StartButton onStartButtonClick = {this.onStartButtonClick.bind(this)}/>
          <StopButton onStopButtonClick = {this.onStopButtonClick.bind(this)} />
      </div>
    );
  }
}



window.App = App;

