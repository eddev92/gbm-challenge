import React, { Component } from 'react';
import TableComponent from '../shared/table/index';
import ChallengeGbm from '../../api/challenge'
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
    componentDidMount() {
            this.loadData();
    }
    loadData = () => {
        const api = new ChallengeGbm();
        
        return api.getData()
        .then((response) => {
            console.log('response', response)
            return this.setState({ data: response })
        })
        .catch((error) => {
           return console.log('error', error)
		});
    }
    render() {
        // const { data } = this.state;
        const { isValid, dashboardActive, data = [] } = this.props;
        const header = ['FECHA', 'POLIZA', 'CLIENTE', 'PLACA'];

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
