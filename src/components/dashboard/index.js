import React, { Component } from 'react';
import TableComponent from '../shared/table/index';
import '../../styles/dashboard.css';
import Spinner from '../shared/spinner';

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
