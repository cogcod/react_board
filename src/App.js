import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostMain from './page/PostMain';
import PostView from "./page/PostView";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<PostMain />}/>
                  <Route path="/postview/:no" element={<PostView />}/>
                  {/* :no 는 게시글 번호에 해당하는 상세페이지로 이동 */}
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
