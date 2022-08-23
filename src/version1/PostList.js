import React, {useEffect, useState} from 'react';
import CommonTable from "../table/CommonTable";
import CommonTableRow from "../table/CommonTableRow";
import CommonTableColumn from "../table/CommonTableColumn";
import { postData } from "../data/Data";
import { Link, useNavigate } from "react-router-dom";

function PostList() {
    const [ dataList, setDataList ] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        setDataList(postData);  // postData 유저 데이터를 setDataList를 통해 dataList 값으로 넣어라
    }, [])

    function onClickNewPost(){
        navigate("/PostNew")
    }

    return (
        <>
            <CommonTable header={['글번호', '제목', '등록일', '조회수']} >
            {
                dataList ? dataList.map((item, index) => {  // dataList가 있으면? 각 유저를 돌면서 아래 태그로 데이터 뿌리기
                    return (
                        <CommonTableRow key={index}>
                            <CommonTableColumn>{item.no}</CommonTableColumn>
                            <CommonTableColumn>
                                <Link to={`/postView/${item.no}`}>{item.title}</Link>
                            </CommonTableColumn>
                            <CommonTableColumn>{item.createDate}</CommonTableColumn>
                            <CommonTableColumn>{item.readCount}</CommonTableColumn>
                        </CommonTableRow>
                    )
                }) : ''
            }
            </CommonTable>
            <button onClick={onClickNewPost}>글쓰기</button>
        </>
    );
}

export default PostList;