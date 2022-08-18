import React from 'react';
import { insertPost, postData } from "../data/Data";

// 데이터 넣을 기본 구조 + default 값 세팅
let post = {
    "no": 1,
    "title": null,
    "content": null,
    "createDate": null,
    "readCount": 0
}



function createPost() {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth();
    const date = nowDate.getDate();
    // 날짜 형태 두자릿수로 : 앞에 00을 붙이고 뒤에서 2자리만 가져온다. (001 -> 01)
    const format = year+"-"+(("00"+month.toString()).slice(-2))+"-"+(("00"+date.toString()).slice(-2));


    post.no = postData.length + 1;
    post.title   = document.getElementById("title").value; // post의 title에 'title' 태그 값(value) 할당
    post.content = document.getElementById("content").value; // post의 content에 'content' 태그 값(value) 할당
    post.createDate = format;

    insertPost(post);
}

console.log(postData);
// Error ===> 데이터를 Insert했는데 새로고침하면 초기화 된다...... ??

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