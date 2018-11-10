import React, { Component } from 'react';
import TableComponent from '../shared/table/index';
import '../../styles/dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                result: false,
                resultObj: [],
                msg: 'Ok'
            },
            isLogged: props.isValid
        }
    }
    render() {
        const { isValid, data = [] } = this.props;
        const header = ['FECHA', 'PORCENTAJE', 'PRECIO', 'VOLUMEN'];

        return (
            <div className="row">
                <div className={isValid ? 'main-dashboard col-10 isLoged' : 'main-dashboard col-10'}>
                    {data.resultObj.length > 0 ? <TableComponent headerTitles={header} data={data}/> : <span>La información se está cargado, espere un momento por favor.</span>}
                </div>
            </div>
        )

    }
}

export default Dashboard;
