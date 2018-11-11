import React, { Component } from 'react';
import TableComponent from '../shared/table/index';
import '../../styles/dashboard.css';
import ChallengeGbm from '../../api/challenge';
import Spinner from '../shared/spinner';
let init = 0;
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
        console.log('/*********************/')
        console.log('entro aqui componentWillReceiveProps dashboard nextProps ', nextProps)
        console.log(init)
        console.log(nextProps.isValid)
        console.log('/*********************/')
        // if (!nextProps.isValid && init === 1) {
        //     this.getUser({userName: this.props.userNameAux, token: this.props.token});
        // }
        // if (init === 0) {
        //     return this.getUser({userName: this.props.userNameAux, token: this.props.token});
        // }
        if (nextProps.dashboardActive) {
            if (nextProps.isValid && nextProps.auth.token.length >= 0) {
                console.log('aqui bucle')
                this.getUser({userName: this.props.userNameAux, token: this.props.token});
            }

        }
    }
    getUser(...user) {
        console.log(user[0])
        const { auth } = this.props;
        console.log(auth)
        const val = auth ? auth: user[0];
        const api = new ChallengeGbm();
        api.getUser(val)
          .then((response) => {
              console.log(response)
              init = 1;
              console.log(response)
              this.setState({userInfo: response}, () => {
                this.props.handleUser(this.state.userInfo, init);
                init = 3;
              })
              return console.log('response', response)
          })
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
