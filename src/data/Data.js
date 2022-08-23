const postData = [
    {
        "no": 1,
        "title": "첫번째 게시글 입니다.",
        "content": "첫번째 게시글 내용입니다.",
        'createDate': "2022-08-01",
        "readCount": 6
    },
    {
        "no": 2,
        "title": "두번째 게시글 입니다.",
        "content": "두번째 게시글 내용입니다.",
        "createDate": "2022-08-01",
        "readCount": 12
    },
    {
        "no": 3,
        "title": "세번째 게시글 입니다.",
        "content": "세번째 게시글 내용입니다.",
        "createDate": "2022-08-01",
        "readCount": 4
    },
    {
        "no": 4,
        "title": "네번째 게시글 입니다.",
        "content": "네번째 게시글 내용입니다.",
        "createDate": "2022-08-01",
        "readCount": 5
    },
    {
        "no": 5,
        "title": "다섯번째 게시글 입니다.",
        "content": "다섯번째 게시글 내용입니다.",
        "createDate": "2022-08-01",
        "readCount": 2
    }
]

/*
    getPostByNo: 특정 게시글 번호를 통해 게시글 객체를 가져오는 함수
        - filter : 조건에 해당하는 요소를 모아 새로운 배열로 반환하는 메서드
        - 함수의 매개변수로 찾고자 하는 findNum을 넣으면 해당 no와 맞는 요소를 filter해서 뿌려준다.
*/

const getPostByNo = findNum => {
    const array = postData.filter(x => x.no === Number(findNum));
    if(array.length === 1){
        return array[0];
    }
    return null;
}

// 글쓰기 함수 : 기존 데이터 마지막 요소에 push
function insertPost(post) {
 postData.push(post);
 return postData;
}

export {
    postData,
    getPostByNo,
    insertPost,
}
