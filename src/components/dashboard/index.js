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
        console.log('this.props.token', this.props.token)
        console.log('this.props.userNameAux', this.props.userNameAux)
        if(this.props.token && this.props.userNameAux && init === 0) {
            const api = new ChallengeGbm();
            api.getUser({userName: this.props.userNameAux, token: this.props.token})
                .then((response) => {
                    console.log('didmount getuser dashboard', response)
                    this.setState({userInfo: response}, () =>{
                        this.props.handleUser(response, 3);
                    })
                    return console.log('response', response)
                })
        }
        
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.token)
        console.log('init', init)
        if (nextProps.isValid) {
            this.getUser();
        }
    }
    getUser() {
        const { auth } = this.props;
        const api = new ChallengeGbm();
        console.log('auth', auth)
        api.getUser(auth)
          .then((response) => {
              init = 1;
              this.setState({userInfo: response}, () => {
                this.props.handleUser(this.state.userInfo, init);
                init = 2;
              })
              return console.log('response', response)
          })
      }
    render() {
        const { userInfo } = this.state;
        const { isValid, data = [], token } = this.props;
        const header = ['FECHA', 'PORCENTAJE', 'PRECIO', 'VOLUMEN'];
        console.log('userInfo dashboard', userInfo)
     
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
