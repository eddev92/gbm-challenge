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
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
        // console.log(loadUser)
        // if (loadUser <= 1 && !nextProps.dashboardActive && !nextProps.isValid) {
        //     if (nextProps.token !== '') {
        //         console.log('bucle aqui D:')
        //         this.getUser({userName: this.props.userNameAux, token: this.props.token});
        //         }
        // }

        // if (nextProps.dashboardActive ) {
        //     if (nextProps.isValid && nextProps.auth.token.length >= 0) {
        //         console.log('aqui bucle')
        //         this.getUser({userName: this.props.userNameAux, token: this.props.token});
        //     }

        // }
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
