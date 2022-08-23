import React from 'react';
import { insertPost, postData } from "../data/Data";

// 날짜 추출 함수
function formatDate(){
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth();
    const date = nowDate.getDate();
    // 날짜 형태 두자릿수로 : 앞에 00을 붙이고 뒤에서 2자리만 가져온다. (001 -> 01)
    return year+"-"+(("00"+month.toString()).slice(-2))+"-"+(("00"+date.toString()).slice(-2));
}

// 글쓰기 기능 : 새 데이터 추가하기
function createPost() {

    // 데이터 넣을 기본 구조 + default 값 세팅
    const newPost = {
        "no": 1,
        "title": null,
        "content": null,
        "createDate": null,
        "readCount": 0
    }

    newPost.no = postData.length + 1;
    newPost.title   = document.getElementById("title").value; // post의 title에 'title' 태그 값(value) 할당
    newPost.content = document.getElementById("content").value; // post의 content에 'content' 태그 값(value) 할당
    newPost.createDate = formatDate(new Date());

    window.history.back(); // 이전 state를 기억한다. 이전상태를 기억

    // console.debug('here');
    insertPost(newPost);
    console.log(postData);
}


/*
    [ Error ]
        1. 이전에 push했던 데이터까지 같은 값으로 대치됨
        2. 게시글 누르면 상세정보 안뜸
        3. 새로고침하면 초기화됨 (데이터 저장 안됨)
        4. 새글작성 - '등록' 버튼에 메인화면 이동 코드 추가하니까 push가 안된다...
*/



function PostNew() {
    return (
        <div>
            <h2>새 글 작성</h2>
            <div>
                <input type="hidden" id="no"/>
                <span>제목 : </span><input type="text" name="title" id="title"/>
                <p>내용 : </p>
                <textarea id="content"></textarea>
            </div>
            <button onClick={() => createPost()}>등록</button>
        </div>
    );
}

export default PostNew;