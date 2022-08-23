import React, {useState} from 'react';

function Count() {
    const [ count, setCount ] = useState(0);

    return (
        <td className="common-table-column" onClick={()=> console.log("dd??") }>
            { count }
        </td>
    );
}

export default Count;