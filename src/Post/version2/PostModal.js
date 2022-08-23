import React from 'react';

function PostModal(props) {
    return (
        <div className="modal-container">
            <h2>게시글 상세정보</h2>
            <p>제목 : {props.title}</p>
            <p>날짜 : {props.date}</p>
            <p>조회수 : {props.count}</p>
            <p>내용 : {props.text}</p>
        </div>
    );
}

export default PostModal;