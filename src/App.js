import React, { Component } from 'react';
import './App.css';
import {ROUTE_IMG_BACKGROUND} from './constants/constants';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${ROUTE_IMG_BACKGROUND})`}}>
      <Login />
      </div>
    );
  }
}

export default App;
