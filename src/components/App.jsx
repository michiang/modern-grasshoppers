import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tasks: [],
      currentTask: '',
      currentTaskArray: [],
      start_time: Date,
      started: false,
      secondsElapsed: 0,
      lastIncrement: null,
      //stop: true
      passwordInSignin: '',
      usernameInSignin: '',
      usernameInSignup: '',
      passwordInSignup: '',
      currentUser: ''
    }
    this.incrementer = null;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onPauseButtonClick = this.onPauseButtonClick.bind(this);
    this.onStartButtonClick = this.onStartButtonClick.bind(this);
    this.onStopButtonClick = this.onStopButtonClick.bind(this);
  }

  //Ajax get request needs to be wrapped in a function
  //so that the request can be called every time
  //componentdidMount is invoked
  //Loads data from API
  loadDataFromServer() {
    //REFACTOR to get data from just the signed in user..........
    //var user = 'Grasshopper';

    // $.get('/tasks/'+user, function(data) {
    //   global.allData = data;
    //   console.log('GLOBAL DATA', global.allData);
    //   this.setState({tasks: data});
    // });
    var that = this;

    $.ajax({
      type: "GET",
      url: '/tasks',
      success: function(data) {
        console.log('GOT DATA', data);
        that.setState({tasks: data});
      },
      contentType: 'application/json',
      dataType: 'json'
    });


  }

  //Post data to the server only when the stop button event handler
  //is triggered
  postDataToServer() {
    console.log('INSIDE POST', this.state);
    //var username = 'Grasshopper';
    // $.post('/tasks/'+username, JSON.stringify({
    //   task: this.state.currentTask,
    //   start_time: this.state.start_time,
    //   end_time: Date.now()
    // }),
    // function (data) {
    //   console.log(data);
    // },
    // 'json');
    var that = this;
    $.ajax({
      type: "POST",
      url: '/tasks',
      data: JSON.stringify({
        task: this.state.currentTask,
        start_time: this.state.start_time,
        end_time: Date.now()
      }),
      success: function(data) {
        console.log('POST SUCCESS', data);
        that.loadDataFromServer();
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

  onPauseButtonClick(e) {
    e.preventDefault();
    clearInterval(this.incrementer);
    this.setState({
      lastIncrement: this.incrementer
    });
  }

  postToSignin(e) {
    e.preventDefault();
    console.log('INSIDE POST', this.state);
    var that = this
    $.ajax({
      type: "POST",
      url: '/signin',
      data: JSON.stringify({
        username: this.state.usernameInSignin,
        password: this.state.passwordInSignin
      }),
      success: function(data) {
        console.log('POST SUCCESS', data);
        that.setState({
          passwordInSignin: "",
          currentUser: that.state.usernameInSignin
        })
        that.loadDataFromServer();
      },
      error: function(error) {
        console.log('POST OOPS!', error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  postToSignup(e) {
    e.preventDefault();
    console.log('INSIDE POST', this.state);
    var that = this
    $.ajax({
      type: "POST",
      url: '/signup',
      data: JSON.stringify({
        username: this.state.usernameInSignup,
        password: this.state.passwordInSignup
      }),
      success: function(data) {
        console.log('POST SUCCESS', data);
        that.loadDataFromServer();
      },
      error: function(error) {
        console.log('POST OOPS!', error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  signout(e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: '/signout',
      success: function() {
        //route to signin?
        console.log('GET SUCCESS');
      },
      error: function(error) {
        console.log('POST OOPS!', error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // currentTaskArray.push(this.state.currentTask);
    this.setState({
      currentTaskArray: this.state.currentTaskArray.concat(this.state.currentTask)
    });
    console.log('SUBMIT', this.state.currentTaskArray);
  }

  handleUsernameChange(e) {
    console.log('CHANGE STATE', this.state);
    var state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }


  handleChange(event) {
    console.log('CHANGE STATE', this.state);
    this.setState({currentTask: event.target.value});
  }

  onStartButtonClick(e)  {
    //if started === true, then break out or invoke stop button event
    e.preventDefault();
    this.incrementer = setInterval(() => (this.tick(), 1000));
    this.setState({
      start_time: Date.now(),
      started: true,  //so we can prevent another task from being created
    });
    console.log('EVENT', event);
    console.log('START STATE', this.state);
  };

  tick() {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    this.loadDataFromServer();
  }

  render() {
    return(
      <div>
      Signed in as {this.state.currentUser}
      <div className='container content'>
        <div className='signin'>
          <UserSignIn
            postToSignin={this.postToSignin.bind(this)}
            handleUsernameChange={this.handleUsernameChange.bind(this)}
            />
        </div>
        <div className='signup'>
          <UserSignUp
            postToSignup={this.postToSignup.bind(this)}
            handleUsernameChange={this.handleUsernameChange.bind(this)}
            />
        </div>
        <div>
          <UserSignout
            signout={this.signout.bind(this)}
          />
        </div>
        <div className='container form'>

          <TaskEntry
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
          />

        </div>

        { /*TODO: Change className?*/ }
        <div className="container tasks">

          <CurrentTasksView
            task={this.state.currentTaskArray}
            timer={this.state.secondsElapsed}
            onPauseButtonClick={this.onPauseButtonClick.bind(this)}
            onStartButtonClick={this.onStartButtonClick.bind(this)}
            onStopButtonClick={this.onStopButtonClick.bind(this)}
          />

        </div>

        <div className='container tasks'>
          <CompletedTaskList
            tasks={this.state.tasks}
          />

        </div>
      </div>
      </div>
    );
  }
}


window.App = App;

