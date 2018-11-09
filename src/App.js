import React, { Component } from 'react';
import './App.css';
import {ROUTE_IMG_BACKGROUND} from './constants/constants';
import Login from './components/login';
import Dashboard from './components/dashboard';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isValid: false,
        isLoged: false
    }
  }
  componentDidUpdate() {
    if (this.state.isValid) {
      setTimeout(() => {
        this.setState({ isLoged: true })
      }, 1000);
    }
  }
  validateUser = () => {
    this.setState({ isValid: true })
  }
  render() {
    const { isValid, isLoged } = this.state;

    return (
      <div className="App" style={{backgroundImage: `url(${ROUTE_IMG_BACKGROUND})`}}>
        <Login validateUser={this.validateUser} isValid={isValid} />
        <Dashboard isLoged={isLoged} />
      </div>
    );
  }
}

export default App;
