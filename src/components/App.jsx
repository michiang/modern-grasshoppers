import React from 'react';
import RectDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      task: '',
      body: ''
    }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  //Ajax get request needs to be wrapped in a function
  //so that the request can be called every time
  //componentDidMount is invoked
  //Loads data from API
  loadDataFromServer() {
    $.get('/api/users/tasks', function (data) {
      console.log(data);
      global.allData = data;
    });
  }

  //Post data to the server only when the stop button is clicked
  //and all data is gathered
  postDataToServer() {
    $("StopButton").click(function() {
      $.post('/api/users/tasks',
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

  //Lifecycle method invoked immediately after a component is mounted
  //When loading data from a remote endpoint, this method will instantiate
  //the network request.
  componentDidMount() {
    this.loadDataFromServer();
  }


  render() {
    return (
      <div>
      <div><h1>You Really Did It!!  YES you did.</h1></div>
      <div className="col-md-7">
        <TaskList tasks = {this.state.task}/>
      </div>
      <div className="col-md-5">
        <StartButton onStartButtonClick = {this.onStartButtonClick.bind(this)}/>
        <StopButton onStopButtonClick = {this.onStopButonClick.bind(this)} />
      </div>
    );
  }
}


window.App = App;

