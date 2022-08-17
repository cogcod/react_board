import React, {useEffect, useState} from 'react';
import CommonTable from "../table/CommonTable";
import CommonTableRow from "../table/CommonTableRow";
import CommonTableColumn from "../table/CommonTableColumn";
import { postData } from "../data/Data";
import {Link} from "react-router-dom";

function PostList(props) {
    const [ dataList, setDataList ] = useState([]);

    useEffect(()=>{
        setDataList(postData);
    }, [])

    return (
        <>
            <CommonTable header={['글번호', '제목', '등록일', '조회수']} >
            {
                dataList ? dataList.map((item, index) => {
                    return (
                        <CommonTableRow key={index}>
                            <CommonTableColumn>{item.no}</CommonTableColumn>
                            <CommonTableColumn>
                                <Link to={`/postView/${item.no}`}>{item.title}</Link>
                            </CommonTableColumn>
                            <CommonTableColumn>{item.createData}</CommonTableColumn>
                            <CommonTableColumn>{item.readCount}</CommonTableColumn>
                        </CommonTableRow>
                    )
                }) : ''
            }
            </CommonTable>
        </>
    );
}

export default PostList;