import React from 'react';
// import { useParams } from "react-router-dom";
import './PostList.css';
import {useParams} from "react-router-dom";
import {getPostByNo} from "../data/Data";

function PostView() {
    const params = useParams();
    const findData = getPostByNo(params.no);

    return (
        <div className="post-view-container">
            <h2 align="center">게시글 상세정보</h2>
            <div className="post-view-wrapper">
                {
                    findData ? (
                        <>
                            <div className="post-view-row">
                                <label>게시글 번호</label>
                                <label>{ findData.no }</label>
                            </div>
                            <div className="post-view-row">
                                <label>제목</label>
                                <label>{ findData.title }</label>
                            </div>
                            <div className="post-view-row">
                                <label>작성일</label>
                                <label>{ findData.createDate }</label>
                            </div>
                            <div className="post-view-row">
                                <label>조회수</label>
                                <label>{ findData.readCount }</label>
                            </div>
                            <div className="post-view-row">
                                <label>내용</label>
                                <div>{ findData.content }</div>
                            </div>
                        </>
                    ) : "해당 게시글을 찾을 수 없습니다."
                }
            </div>
        </div>
    );
}

export default PostView;