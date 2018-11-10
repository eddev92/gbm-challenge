import React, { Component } from 'react';
import './App.css';
import {ROUTE_IMG_BACKGROUND} from './constants/constants';
import Login from './components/login';
import ChallengeGbm from './api/challenge'
import Dashboard from './components/dashboard';
let init = 0;
class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isValid: false,
        dashboardActive: false,
        validatorAux: false,
        data: {
          result: false,
          resultObj: [],
          msg: 'Ok'
      },
    }
  }
  componentDidUpdate() {
    if (init === 0) {
      if (this.state.isValid === true && this.state.dashboardActive === true) {
        setTimeout(() => {
          this.loadData();
        }, 1000)

      }
    }
}
loadData = () => {
const api = new ChallengeGbm();

return api.getData()
.then((response) => {
    console.log('response', response)
    init = 1;
    this.setState({ data: response }, () => {
      this.resetValue();
    })
})
.catch((error) => {
    init = 2;
   return console.log('error', error)
});
}
  
  resetValue = () => {    
    this.setState({ dashboardActive: false })
  }
  validateUser = () => {
    this.setState({ isValid: true, dashboardActive: true, validatorAux: true  })
  }
  render() {
    const { isValid, dashboardActive, validatorAux, data } = this.state;
console.log(isValid)
console.log(dashboardActive)
console.log('data', data)
    return (
      <div className="App" style={{backgroundImage: `url(${ROUTE_IMG_BACKGROUND})`}}>
        <Login validateUser={this.validateUser} isValid={isValid} />
        <Dashboard dashboardActive={dashboardActive} validatorAux={validatorAux} isValid={isValid} data={data} />
      </div>
    );
  }
}

export default App;
