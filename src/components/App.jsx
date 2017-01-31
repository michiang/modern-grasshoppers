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
    var user = 'Grasshopper';

    // $.get('/tasks/'+user, function(data) {
    //   global.allData = data;
    //   console.log('GLOBAL DATA', global.allData);
    //   this.setState({tasks: data});
    // });

    $.ajax({
      type: "GET",
      url: '/tasks/'+user,
      success: function(data) {
        console.log('GOT DATA', data);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  //Post data to the server only when the stop button event handler
  //is triggered
  postDataToServer() {
    console.log('INSIDE POST', this.state);
    var username = 'Grasshopper';
    // $.post('/tasks/'+username, JSON.stringify({
    //   task: this.state.currentTask,
    //   start_time: this.state.start_time,
    //   end_time: Date.now()
    // }),
    // function (data) {
    //   console.log(data);
    // },
    // 'json');
    $.ajax({
      type: "POST",
      url: '/tasks/'+username,
      data: JSON.stringify({
        task: this.state.currentTask,
        start_time: this.state.start_time,
        end_time: Date.now()
      }),
      success: function(data) {
        console.log('POST SUCCESS', data);
      },
      error: function(error) {
        console.log('POST OOPS!', error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  onStopButtonClick(e) {
    e.preventDefault();
    this.postDataToServer();
    //reset state
    this.setState({
      currentTask: '',
      started: false,
    });
    console.log('STOP STATE', this.state);
  };

  // handleSubmit(e) {
  //   e.preventDefault()
  //   this.setState({
  //     //currentTask: this.refs.taskText,
  //     end_time: Date.now(),
  //     started: false,  //so we can prevent another task from being created
  //     //stop: false
  //   });
  // }

  handleChange(event) {
    console.log('CHANGE STATE', this.state);
    this.setState({currentTask: event.target.value});
  }

  onStartButtonClick(e)  {
    e.preventDefault();
    this.setState({
      start_time: Date.now(),
      started: true,  //so we can prevent another task from being created
    });
    console.log('EVENT', event);
    console.log('START STATE', this.state);
  };

  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
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

