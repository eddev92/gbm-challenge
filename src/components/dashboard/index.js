import React, { Component } from 'react';
import TableComponent from '../shared/table/index';
import '../../styles/dashboard.css';
import Spinner from '../shared/spinner';
import {MESSAGE_FILTER} from '../../constants/constants';

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
            userInfo: props.userInfo,
            listFiltered: [],
            valueToFilter: {
                type: '',
                key: ''
            },
            message: ''
        }
    }
    filterList = () => {
        const { data = []} = this.props;
        const { valueToFilter } = this.state;
        let filtereds = [];
        if (valueToFilter.type === 'Default') {
            alert(MESSAGE_FILTER.MESSAGE_001)
            return this.setState({ listFiltered: data.resultObj });
        }
        if(valueToFilter.key && valueToFilter.type) {
            data.resultObj.forEach((elmt) => {
                if (elmt[valueToFilter.type].toString() === valueToFilter.key) {
                    filtereds.push(elmt);
                    this.setState({ listFiltered: filtereds })
                }
            })
        } else {
            return alert(MESSAGE_FILTER.MESSAGE_001)
        }
        if (filtereds.length === 0) {
            alert(MESSAGE_FILTER.MESSAGE_002 + " " + valueToFilter.key);            
        }
    }
    handleValueToFilter = (value) => {
        const { valueToFilter } = this.state;
        if (value) {
            const val = value.target.value;
            const target = value.target.id;
            const aux = { ...valueToFilter };
            aux[target] = val;
            this.setState({ valueToFilter: aux })
        }

    }
    render() {
        const { isValid, data = [], token } = this.props;
        const { valueToFilter, listFiltered } = this.state;
        const header = ['FECHA', 'PORCENTAJE', 'PRECIO', 'VOLUMEN'];
        const list = listFiltered.length ? listFiltered :  data.resultObj;

        return (
            <div className="row">
                <div className={(isValid || token) ? 'main-dashboard col-10 isLoged' : 'main-dashboard col-10'} >
                <div className="form-group">
                    <select className="form-control col-md-4" id="type" onChange={this.handleValueToFilter.bind(valueToFilter.type)} value={valueToFilter.type}>
                        <option value="Default">Todos</option>
                        <option value="Volumen">Volumen</option>
                        <option value="Precio">Precio</option>
                    </select>
                    <input type="email" id="key" className="form-control col-md-6 mail-user" onChange={this.handleValueToFilter.bind(valueToFilter.key)} value={valueToFilter.key} placeholder="Ingrese volumen" />
                    <button type="submit" className="btn btn-primary" onClick={this.filterList}>Buscar</button>
                </div>
                    {(data && data.resultObj.length > 0) 
                    ?
                     <TableComponent headerTitles={header} data={list}/> 
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
