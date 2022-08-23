import React from 'react';
import { getPostByNo } from "../../data/Data";
import { useParams, useNavigate } from "react-router-dom";
import './PostList.css';

function PostView() {
    const params = useParams();
    const findData = getPostByNo(params.no);
    let history = useNavigate();

    return (
        <>
            <h2 align="center">게시글 상세정보</h2>
            <div className="post-view-wrapper">
                {
                    params ? (
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

                <button className="post-view-go-list-btn" onClick={
                    () => history("/")
                }>목록으로 돌아가기</button>
            </div>
        </>
    );
}

export default PostView;