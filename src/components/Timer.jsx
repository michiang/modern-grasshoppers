import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Timer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      secondsElapsed: 0,
      lastIncrement: null
    }
    this.incrementer = null;
  }

  formatTime(seconds) {
    return Math.floor(seconds / 60) + ':' + ('0' + seconds % 60).slice(-2);
  }

  tick() {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
  }

  render() {
    return(
      <div>
        {this.formatTime(this.state.secondsElapsed)}
        {console.log('TIMER:', this.state)}
        <StartButton onStartButtonClick = {this.props.onStartButtonClick}/>
        <PauseButton onPauseButtonClick = {this.props.onPauseButtonClick}/>
        <StopButton onStopButtonClick = {this.props.onStopButtonClick}/>
      </div>
    )
  }
}

window.Timer = Timer;