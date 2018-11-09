import React from 'react';
import RowComponent from './row';
import '../../../styles/table.css';

const TableComponent = ({ data = [] }) => {
    const list = data.length ? data.map((elmt, index) => {
        return <RowComponent element={elmt} />
    })
    : null;

        return (
            <div className="main-table">
                {list}
            </div>
        )
}

export default TableComponent;
