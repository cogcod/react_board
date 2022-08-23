import React, {useEffect, useState} from 'react';
import CommonTable from "../../table/CommonTable";
import CommonTableRow from "../../table/CommonTableRow";
import CommonTableColumn from "../../table/CommonTableColumn";
import {postData} from "../../data/Data";
import {useNavigate} from "react-router-dom";
import PostModal from "./PostModal";
import './PostList.css';

function PostList() {
    const [ dataList, setDataList ] = useState([]);
    // const [ title, setTitle ] = useState();
    // const [ text, setText ] = useState("해당 내용이 없습니다.");
    // const [ date, setDate ] = useState();
    // const [ count, setCount ] = useState();
    // const [ modal, setModal ] = useState(false);

    const navigate = useNavigate();

    const [ viewPost, setViewPost ] = useState();

    useEffect(()=>{
        setDataList(postData);
    }, [])

    function onClickNewPost(){
        navigate("/PostNew")
    }

    return (
        <>
            <h1 className="post-header">MY BOARD</h1>
            <div className="post-list-wrapper">
                <CommonTable header={['글번호', '제목', '등록일', '조회수']} >
                    {
                        dataList ? dataList.map((item, index) => {
                            return (
                                <CommonTableRow key={index} item={item} setViewPost={setViewPost} viewPost={viewPost}>
                                    <CommonTableColumn>{item.no}</CommonTableColumn>
                                    <CommonTableColumn>{item.title}</CommonTableColumn>
                                    <CommonTableColumn>{item.createDate}</CommonTableColumn>
                                    <CommonTableColumn>{item.readCount}</CommonTableColumn>
                                </CommonTableRow>
                            )
                        }) : ''
                    }
                </CommonTable>
                <button className="post-new-btn" onClick={onClickNewPost}>글쓰기</button>

                {
                    viewPost ? <PostModal title={viewPost?.title} date={viewPost?.createDate} count={viewPost?.readCount} text={viewPost?.content} /> : null
                }

            </div>
        </>
    );
}

export default PostList;