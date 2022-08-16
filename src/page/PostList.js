import React from 'react';
import CommonTable from "../table/CommonTable";

function PostList() {
    return (
        <>
            <CommonTable header={['글번호', '제목', '등록일', '조회수']} />
        </>
    );
}

export default PostList;