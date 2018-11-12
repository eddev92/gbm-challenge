import React, { Component } from 'react';
import './App.css';
import {ROUTE_IMG_BACKGROUND, AUTH} from './constants/constants';
import Login from './components/login';
import ChallengeGbm from './api/challenge'
import Auth from './api/auth';
import Dashboard from './components/dashboard';
import NavComponent from './components/shared/nav';
import localStorageConfig from './utils/local-storage';
let init = 0;
let token = '';
let userNameAux;

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
        userName: '',
        password: ''
      },
      auth: {},
      userInfo: {},
      userLoaded: {}
    }
  }
  componentDidMount() {
    token = localStorageConfig.getToken(AUTH.TOKEN);
    userNameAux = localStorageConfig.getToken(AUTH.USERNAME);
    if (this.state.isValid || this.state.dashboardActive || token) {
      this.loadData();
      this.getUser({userName: userNameAux, token: token})
    }
  }
  componentDidUpdate() {
    if (this.state.auth.token !== '') {
     token = localStorageConfig.getToken('token');
    }
  }
  getUser(user) {
    const api = new ChallengeGbm();
        api.getUser(user)
      .then((response) => {
          this.setState({userInfo: response})
      })
  }
loadData = () => {
const api = new ChallengeGbm();

api.getData()
  .then((response) => {
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
    const { user } = this.state;
    const reset = {
        userName: '',
        password: ''
      }
    const api = new Auth();

    api.AuthUser(user)
      .then((response) => {
          if (response.status) {
            alert('usuario invalido')
           return this.setState({ isValid: false, dashboardActive: false, user: reset });
          }
          this.setState({ isValid: true, dashboardActive: true, auth: response }, () => {
            localStorageConfig.setValue(AUTH.TOKEN, response.token);
            localStorageConfig.setValue(AUTH.USERNAME, response.userName);
          });
          this.getUser(response);
          setTimeout(() => {
            this.loadData();
          }, 2000);
      })
  }

  handleChange = (evt) => {
    const { user } = this.state;
    if (evt && evt.target) {
      const id = evt.target.id;
      const auxUser = { ...user };
      auxUser[id] = evt.target.value;
      this.setState({ user: auxUser });
    }
  }
  handleUser = (user, value) => {
    if (value === 1) {
      return this.setState({ userLoaded: user })      
    }
    if (init === 0 && this.state.dashboardActive && value <= 1)  {
        this.setState({ userInfo: user })
    }
  }
  handleFinishSession = () => {
    const reset = {
      userName: '',
      password: ''
    }
    localStorageConfig.removeToken(AUTH.TOKEN);
    localStorageConfig.removeToken(AUTH.USERNAME);
    window.location.reload()
    this.setState({isValid: false, dashboardActive: false, user: reset })

  }
  render() {
    const { isValid, dashboardActive, data, user, auth, userInfo, userLoaded } = this.state;
    return (
      <div className="App" style={{backgroundImage: `url(${ROUTE_IMG_BACKGROUND})`}}>
      {(isValid || token) && <NavComponent user={userInfo ? userInfo : userLoaded} token={token} handleFinishSession={this.handleFinishSession}/>}
      <Login validateUser={this.validateUser} isValid={isValid} user={user} handleChange={this.handleChange} token={token}/>
      <Dashboard dashboardActive={dashboardActive} isValid={isValid} data={data} auth={auth} userInfo={userInfo} handleUser={this.handleUser} token={token} userNameAux={userNameAux}/>
    </div>
    )
    
  }
}

export default App;
