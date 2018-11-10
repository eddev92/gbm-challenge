import React from 'react';
import RowComponent from './row';
import '../../../styles/table.css';

const TableComponent = ({ headerTitles = [], data }) => {
    console.log(data)

        return (
            <div className="main-table">
              <table>
                <thead className="thead-default">
                    <tr className="text-black">
                        {headerTitles && headerTitles.map((e, index) => <th key={index}>{e}</th>)}
                    </tr>
                </thead>
                <tbody>
                {
                    data.resultObj.map((elmt, index) => (
                        <RowComponent element={elmt} key={index}/>
                    ))
                }
                    </tbody>
                </table>
            </div>
        )
}

export default TableComponent;
