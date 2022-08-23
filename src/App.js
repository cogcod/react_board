import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostList from './Post/version2/PostList';
import PostNew from "./Post/version2/PostNew";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<PostList />}/>
                  <Route path="/postnew" element={<PostNew />}/>
                  {/* :no 는 게시글 번호에 해당하는 상세페이지로 이동 */}
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
