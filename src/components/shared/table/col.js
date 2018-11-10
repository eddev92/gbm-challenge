import React from 'react';
import '../../../styles/col.css';

const ColComponent = ({ element, index }) => {
        return (
            <td key={index}>
               {element && <div>{element}</div>}
            </td>
        )   
}

export default ColComponent;
