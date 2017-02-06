import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tasks: [],
      activeTask: '',
      currentTask: true,
      currentTaskArray: [],
      start_time: Date,
      end_time: Date,
      started: false,
      // Counter for the timer.
      secondsElapsed: 0,
      // For keeping track of time when paused.
      lastIncrement: null,
      //stop: true
      passwordInSignin: '',
      usernameInSignin: '',
      usernameInSignup: '',
      passwordInSignup: '',
      currentUser: '',
      project: '',
      projectArray: [],
      incorrectLogin: false,
      usernameTaken: false,
      isLoggedIn: false
    }
    // Init for the setInterval/timer increment function.
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
  checkAuth() {
    console.log('INSIDE checkAuth');
    var context = this;
    $.ajax({
      type: 'GET',
      url: '/',
      success: function() {
        console.log('LOGGED IN!');
        context.setState({
          isLoggedIn: true
        });
      },
      error: function(error) {
        console.log('NOT LOGGED IN!', error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }


  //Loads data from API
  loadDataFromServer() {
    var context = this;
    $.ajax({
      type: 'GET',
      url: '/tasks',
      success: function(data) {
        //console.log('GOT DATA', data);
        var completed = [];
        var current = [];
        data.forEach(function(d) {
          //console.log('task', d);
          if(d.currentTask === true) {
            current.push(d)
          } else {
            completed.push(d)
          }
        });
        console.log('GOT currentTasks', current);
        console.log('GOT completedTasks', completed);

        context.setState({
          tasks: data,
          currentTaskArray: current,
          isLoggedIn: true
        });
      },
      error: function(error) {
        console.log('GET DATA ERROR!', error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  //Post data to the server only when the stop button event handler
  //is triggered
  postDataToServer() {
    console.log('INSIDE POST DATA', this.state);
    var that = this;
    $.ajax({
      type: "POST",
      url: '/tasks',
      data: JSON.stringify({
        task: this.state.activeTask,
        start_time: this.state.start_time,
        end_time: this.state.end_time,
        project: this.state.project,
        currentTask: this.state.currentTask,
        lastIncrement: this.state.lastIncrement
      }),
      success: function(data) {
        console.log('POST SUCCESS');
        that.loadDataFromServer();
      },
      error: function(error) {
        console.log('POST DATA OOPS!', error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });

  }

  postToSignin(e) {
    e.preventDefault();
    console.log('INSIDE POST', this.state);
    var that = this
    $.ajax({
      type: 'POST',
      url: 'signin',
      data: JSON.stringify({
        username: that.state.usernameInSignin,
        password: that.state.passwordInSignin
      }),
      success: function(data) {
        //console.log('SIGN-IN POST SUCCESS DATA', data);
        that.setState({
          passwordInSignin: '',
          currentUser: that.state.usernameInSignin,
          incorrectLogin: false,
          isLoggedIn: true
        })
        console.log('SIGN-IN SUCCESS STATE', that.state);
        that.loadDataFromServer();
      },
      error: function(error) {
        that.setState({
          incorrectLogin: true
        });
        console.log('SIGN-IN POST OOPS!', error);
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
      type: 'POST',
      url: '/signup',
      data: JSON.stringify({
        username: that.state.usernameInSignup,
        password: that.state.passwordInSignup
      }),
      success: function(data) {
        console.log('SIGN-UP POST SUCCESS', data);
        that.setState({
          passwordInSignin: '',
          currentUser: that.state.usernameInSignin,
          usernameTaken: false,
          isLoggedIn: true
        })
        console.log('SIGN-UP SUCCESS STATE', that.state);
        that.loadDataFromServer();
      },
      error: function(error) {
        that.setState({
          usernameTaken: true
        });
        console.log('SIGN-UP POST OOPS!', error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  signout(e) {
    e.preventDefault();
    var that = this;
    // reset state
    $.ajax({
      type: 'POST',
      url: '/signout',
      success: function() {
        that.setState({
          tasks: [],
          activeTask: '',
          currentTask: Boolean,
          currentTaskArray: [],
          start_time: Date,
          end_time: Date,
          started: false,
          // Counter for the timer.
          secondsElapsed: 0,
          // For keeping track of time when paused.
          lastIncrement: null,
          //stop: true
          passwordInSignin: '',
          usernameInSignin: '',
          usernameInSignup: '',
          passwordInSignup: '',
          currentUser: '',
          project: '',
          projectArray: [],
          isLoggedIn: false
        })
        console.log('SIGN-OUT SUCCESS STATE', that.state);
      },
      error: function(error) {
        console.log('SIGN-OUT OOPS!', error);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      task: this.state.activeTask,
      start_time: Date.now(),
      end_time: this.state.end_time,
      project: this.state.project,
      currentTask: true,
      lastIncrement: this.state.lastIncrement
    });
    console.log('SUBMIT', this.state.currentTaskArray);
    this.postDataToServer();
  }

  handleUsernameChange(e) {
    //console.log('CHANGE STATE', this.state);
    var state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleChange(event) {
    console.log('CHANGE STATE', this.state);
    this.setState({activeTask: event.target.value});
  }

  onStartButtonClick(e)  {
    console.log('EVENT onStartButtonClick', e);
    //if started === true, then break out or invoke stop button event
    e.preventDefault();
    //Projects feature
    var projectName = prompt("Enter your project", "Project Name");
    this.setState({
      project: projectName,
      projectArray: this.state.projectArray.concat(this.state.project)
    });
    // Timer increment function.
    this.incrementer = setInterval(() => (this.tick()), 1000);
    this.setState({
      start_time: Date.now(),
      started: true,  //so we can prevent another task from being created
    });
    console.log('EVENT', event);
    console.log('START STATE', this.state);
    this.postDataToServer();
  };

  onStopButtonClick(e) {
    console.log('EVENT onStopButtonClick', e);
    e.preventDefault();
    this.setState({
      end_time: Date.now(),
      started: false,
      currentTask: false
    });
    this.postDataToServer();
    this.incrementer = null;
    console.log('STOP STATE', this.state);
  };

  onPauseButtonClick(e) {
    console.log('EVENT onPauseButtonClick', e);
    e.preventDefault();
    // Pause timer increment.
    clearInterval(this.incrementer);
    // Keep track of what time the timer was paused on.
    this.setState({
      lastIncrement: this.incrementer
    });
    this.postDataToServer();
  }

  // Puts timer in a normal syntax, instead of just counting seconds.
  formatTime(seconds) {
    return Math.floor(seconds / 60) + ':' + ('0' + seconds % 60).slice(-2);
  }

  // Increment seconds in timer.
  tick() {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    //authenticate user
    this.checkAuth();
    this.loadDataFromServer();
  }

  render() {
    return(
      <div id='main-nav'>
        <nav>
          <ul role='nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='signin'>Sign In</Link></li>
            <li><Link to='signup'>Sign Up</Link></li>
            <li><Link to='tasks'>Tasks Layout</Link></li>
          </ul>
        </nav>
        {this.props.children && React.cloneElement(this.props.children, {
              postDataToServer: this.postDataToServer.bind(this),
              onStartButtonClick: this.onStartButtonClick.bind(this),
              onStopButtonClick: this.onStopButtonClick.bind(this),
              handleChange: this.handleChange.bind(this),
              handleSubmit: this.handleSubmit.bind(this),
              handleUsernameChange: this.handleUsernameChange.bind(this),
              postToSignin: this.postToSignin.bind(this),
              postToSignup: this.postToSignup.bind(this),
              signout: this.signout.bind(this),
              loadDataFromServer: this.loadDataFromServer.bind(this),
              tasks: this.state.tasks,
              activeTask: this.state.activeTask,
              currentTask: this.state.currentTask,
              currentTaskArray: this.state.currentTaskArray,
              start_time: this.state.start_time,
              started: this.state.started,
              passwordInSignin: this.state.passwordInSignin,
              usernameInSignin: this.state.usernameInSignin,
              usernameInSignup: this.state.usernameInSignup,
              passwordInSignup: this.state.passwordInSignup,
              currentUser: this.state.currentuser,
              isLoggedIn: this.state.isLoggedIn
            })}
      </div>
    );
  }


  // render: function() {
  //   var children = React.Children.map(this.props.children, function (child) {
  //     return React.cloneElement(child, {
  //       foo: this.state.foo
  //     })
  //   })

  //   return <div>{children}</div>
  // }

}


window.App = App;
//export default App

