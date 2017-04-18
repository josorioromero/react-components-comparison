import React, { Component } from 'react';
import HelloWorldFunctional from './components/helloWorldFunctional';
import HelloWorldPureComponent from './components/helloWorldPureComponent';
import HelloWorldClassComponent from './components/helloWorldClassComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      control: 0
    }

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      control: Math.random()
    });
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <br /><br /><br /><br />

        <div className="row">
          <div className="col-xs-4">
            <HelloWorldFunctional name="Jorge" />
          </div>
          <div className="col-xs-4">
            <HelloWorldPureComponent name="Jorge" />
          </div>
          <div className="col-xs-4">
            <HelloWorldClassComponent name="Jorge" />
          </div>
        </div>

        <br /><br /><br /><br />

        <div className="row">
          <button onClick={this.handleOnClick}>Click me!</button>
          <br />
          <h2>Current state value: {this.state.control}</h2>
        </div>

      </div>
    );
  }
}

export default App;
