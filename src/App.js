import React, { Component } from 'react';
import './App.css';
import {ROUTE_IMG_BACKGROUND} from './constants/constants';
import Login from './components/login';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isValid: false
    }
  }
  validateUser = () => {
    this.setState({ isValid: true })
  }
  render() {
    const { isValid } = this.state;

    return (
      <div className="App" style={{backgroundImage: `url(${ROUTE_IMG_BACKGROUND})`}}>
        <Login validateUser={this.validateUser} isValid={isValid} />
      </div>
    );
  }
}

export default App;
