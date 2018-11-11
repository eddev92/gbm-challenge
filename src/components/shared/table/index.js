import React from 'react';
import RowComponent from './row';
import '../../../styles/table.css';

const TableComponent = ({ headerTitles = [], data }) => {

        return (
            <div className="main-table table-responsive">
              <table className="table table-hover">
                <thead className="thead-default thead-dark">
                    <tr className="text-black">
                        {headerTitles && headerTitles.map((e, index) => <th key={index}>{e}</th>)}
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((elmt, index) => (
                        <RowComponent element={elmt} key={index}/>
                    ))
                }
                    </tbody>
                </table>
            </div>
        )
}

export default TableComponent;
