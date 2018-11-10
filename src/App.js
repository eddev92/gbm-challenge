import React, { Component } from 'react';
import './App.css';
import {ROUTE_IMG_BACKGROUND} from './constants/constants';
import Login from './components/login';
import ChallengeGbm from './api/challenge'
import Auth from './api/auth';
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
      user: {
        documentId: '',
        password: ''
      }
    }
  }
  componentDidUpdate() {
    if (init === 0 && this.state.isValid) {
      if (this.state.isValid === true && this.state.dashboardActive === true) {
        setTimeout(() => {
          this.loadData();
        }, 2000)

      }
    }
}
loadData = () => {
const api = new ChallengeGbm();

api.getData()
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
    const user = {

    }
    // const api = new Auth();

    // api.AuthUser(user)
    //   .then((response) => {
    //       console.log('response', response)
    //       init = 1;
    //       this.setState({ data: response }, () => {
    //         this.resetValue();
    //       })
    //   })
    //   .catch((error) => {
    //       init = 2;
    //     return console.log('error', error)
    //   });  
    this.setState({ isValid: true, dashboardActive: true  })
  }
  handleChange = (evt) => {
    const { user } = this.state;
    if (evt && evt.target.length) {
      console.log('evt', evt.target);
    }
  }
  render() {
    const { isValid, dashboardActive, data, user } = this.state;

    return (
      <div className="App" style={{backgroundImage: `url(${ROUTE_IMG_BACKGROUND})`}}>
        <Login validateUser={this.validateUser} isValid={isValid} user={user} handleChange={this.handleChange}/>
        <Dashboard dashboardActive={dashboardActive} isValid={isValid} data={data} />
      </div>
    );
  }
}

export default App;
