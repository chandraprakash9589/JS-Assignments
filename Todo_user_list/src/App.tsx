import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './components/Users/Users';
import Posts from './components/Post/Post';
import Comments from './components/Comment/Comment';
import Todos from './components/Todo/Todo';

interface AppProps {}

interface AppState {
  userId: number;
  postId: number;
}

class App extends Component<AppProps, AppState> {
  state: AppState = {
    userId: 2, // Default user ID as a number
    postId: 1, // Default post ID as a number
  };

  // handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const userId = Number(event.target.value); // Convert the input value to a number
  //   this.setState({ userId });
  // };

  render() {
    const { userId, postId } = this.state;

    return (
      <div className="App">
        {/* <input value={userId} onChange={this.handleUserIdChange} /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users/:userId/todos" element={<Todos userId={userId} />} />
            <Route path="/users/:userId/posts" element={<Posts userId={userId} />} />
            <Route path="/posts/:postId/comments" element={<Comments postId={postId} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
