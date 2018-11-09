import React, { Component } from 'react';
import TableComponent from '../shared/table/index';
import ChallengeGbm from '../../api/challenge'
import '../../styles/dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }
    componentDidUpdate() {
            this.loadData();
    }
    loadData = () => {
        const service = new ChallengeGbm();
        
        service.getData()
        .then((response) => {
            console.log('response', response.data)
            return this.setState({ data: response })
        })
        .catch((error) => {
           return console.log('error', error)
		});
    }
    render() {
        const { isLoged } = this.props;
        console.log(this.state.data)
        return (
            <div className="row">
                <div className={isLoged ? 'main-dashboard col-10 isLoged' : 'main-dashboard col-10'}>
                    <TableComponent />
                </div>
            </div>
        )

    }
}

export default Dashboard;
