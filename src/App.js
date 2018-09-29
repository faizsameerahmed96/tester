import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Train from './Train'
import Detect from './Detect'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      screenOpen: 1
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello by <u>TEAM 21</u></h1>

        <button onClick={(e) => this.setState({screenOpen: 1})}>Add Face</button>
        <button onClick={(e) => this.setState({screenOpen: 2})}>Detect Face</button>

        <br /><br /><br /><br /><br />

        {this.state.screenOpen == 1 ? <Train /> : <Detect />}
      </div>
    );
  }
}

export default App;
