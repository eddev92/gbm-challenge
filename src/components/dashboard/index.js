import React, { Component } from 'react';
import TableComponent from '../shared/table/index';
import '../../styles/dashboard.css';
import ChallengeGbm from '../../api/challenge';
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
            isLogged: props.isValid
        }
    }
    componentWillReceiveProps(nextProps) {
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
              this.setState({user: response})
              return console.log('response', response)
          })
      }
    render() {
        const { isValid, data = [] } = this.props;
        const header = ['FECHA', 'PORCENTAJE', 'PRECIO', 'VOLUMEN'];
        console.log(this.state.user)
        return (
            <div className="row">
                <div className={isValid ? 'main-dashboard col-10 isLoged' : 'main-dashboard col-10'}>
                    {(data && data.resultObj.length > 0) ? <TableComponent headerTitles={header} data={data}/> 
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
