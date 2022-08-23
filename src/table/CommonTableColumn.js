import React from 'react';

function CommonTableColumn({children}) {
    // const onPostView = () => {
    //     console.log("here")
    // }

    return (
        <td className="common-table-column">
            { children }
        </td>
    );
}

export default CommonTableColumn;