import React from 'react';
import ColComponent from './col';
import '../../../styles/row.css';
import TransformData from '../../../utils/transform';

const RowComponent = ({ element = {} }) => {
    let list = null;
  // transform array cols
  let cols = [];
  cols = TransformData.getCols(element);
    console.log('cols', cols)
    return (
            <tr>
                {  cols.map((elmt, index) => (
                    <ColComponent element={elmt.label} key={index} />
                ))
                }
            </tr>
            )
}

export default RowComponent;
