import React from 'react';


function CommonTableRow(props) {

    return (
        <tr className="common-table-row" onClick={() => {
                console.debug(`No.${props?.item?.no} => ${props.viewPost}`);
                if (props.viewPost !== props.item) {
                    props.item.readCount = props.item.readCount + 1;
                    props.setViewPost(props.item);
                }
            }}>
            { props.children }
        </tr>
    );
}

export default CommonTableRow;