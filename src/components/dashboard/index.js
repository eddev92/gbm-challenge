import React, { Component } from 'react';
import TableComponent from '../shared/table/index';
import '../../styles/dashboard.css';
import ChallengeGbm from '../../api/challenge';
import Spinner from '../shared/spinner';
let init = 0;
let loadUser = 0;
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                result: false,
                resultObj: [],
                msg: 'Ok'
            },
            user: {},            
            isLogged: props.isValid,
            userInfo: props.userInfo
        }
    }
    componentDidMount() {
        console.log('/*********************/')
        console.log('entro aqui componentDidMount dashboard')
        console.log('state dashboard', this.state)
        console.log('/*********************/')
        // if(this.props.token && this.props.userNameAux && init === 0) {
        //     console.log('componentDidMount')
        //     const api = new ChallengeGbm();
        //     this.getUser({userName: this.props.userNameAux, token: this.props.token})
            // api.getUser({userName: this.props.userNameAux, token: this.props.token})
            //     .then((response) => {
            //         console.log(response)
            //         this.setState({userInfo: response}, () =>{
            //             this.props.handleUser(response, 3);
            //         })
            //         return console.log('response', response)
            //     })
        // }
        
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        console.log(loadUser)
        if (loadUser <= 1 && !nextProps.dashboardActive && !nextProps.isValid) {
            if (nextProps.token !== '') {
                console.log('bucle aqui D:')
                this.getUser({userName: this.props.userNameAux, token: this.props.token});
                }
        }

        if (nextProps.dashboardActive ) {
            if (nextProps.isValid && nextProps.auth.token.length >= 0) {
                console.log('aqui bucle')
                this.getUser({userName: this.props.userNameAux, token: this.props.token});
            }

        }
    }
    getUser(user) {
        const { auth } = this.props;
        const api = new ChallengeGbm();
        if (auth.token) {
            api.getUser(auth)
          .then((response) => {
              init = 1;
              console.log(response)
              this.setState({userInfo: response}, () => {
                this.props.handleUser(this.state.userInfo, init);
              })
          })
        } else {
            api.getUser(user)
          .then((response) => {
              init = 1;
              this.setState({userInfo: response}, () => {
                this.props.handleUser(this.state.userInfo, init);
                loadUser = 2;
              })
          })
        }        
      }
    render() {
        const { isValid, data = [], token } = this.props;
        const header = ['FECHA', 'PORCENTAJE', 'PRECIO', 'VOLUMEN'];
     
        return (
            <div className="row">
                <div className={(isValid || token) ? 'main-dashboard col-10 isLoged' : 'main-dashboard col-10'} >
                    {(data && data.resultObj.length > 0) 
                    ?
                     <TableComponent headerTitles={header} data={data}/> 
                    :
                    <div className="empty">
                        <span>
                            La información se está cargado, espere un momento por favor.
                        </span>
                        <Spinner />
                    </div>
                    }
                </div>
            </div>
        )

    }
}

export default Dashboard;
