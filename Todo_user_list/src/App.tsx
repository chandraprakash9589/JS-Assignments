import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


 // Update the import to point to the correct store file
import TodoPage from "./components/Todo/TodoPage";
import UserPage from "./components/User/UserPage";
import PostPage from "./components/Post/PostPage";
import CommentPage from "./components/Comment/CommentPage";

const App = () => {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<UserPage />} />
          {/* <Route path="/users/:userId/todos" element={<TodoPage />} />
          <Route path="/users/:userId/posts" element={<PostPage />} />
          <Route path="/posts/:postId/comments" element={<CommentPage />} /> */}
        </Routes>
      </Router>
    
  );
};

export default App;
