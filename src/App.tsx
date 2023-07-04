import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './components/Users/Users';
import Posts from './components/Post/Post';
import Comments from './components/Comment/Comment';
import Todos from './components/Todo/Todo';
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



interface UserIdParams {
  userId: number;
}

interface PostIdParams {
  postId: number;
}


interface AppProps {

}

interface AppState {
  userId: number;
  postId: number;

  // completed:boolean;
}
class App extends Component<AppProps, AppState> {
  state: AppState = {
    userId: 1, // Default user ID as a number
    postId: 1, // Default post ID as a number
    // completed:false,
  };

  

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

// interface UserIdParams {
//   userId: number;
// }

// interface PostIdParams {
//   postId: number;
// }


// interface AppProps {

//   }
  
//   interface AppState {
//     userId: number;
//     postId: number;
  
//   }
// function App() {
//   const params = useParams();
//   const { userId, postId } = params;
//   return(
//     <Fragment>
//       <div className="App">
//         {/* <input value={userId} onChange={this.handleUserIdChange} /> */}
//         <Router>
//           <Routes>
//             <Route path="/" element={<Users />} />
//             <Route path="/users/:userId/todos" element={<Todos userId={userId} />} />
//             <Route path="/users/:userId/posts" element={<Posts userId={userId} />} />
//             <Route path="/posts/:postId/comments" element={<Comments postId={postId} />} />
//           </Routes>
//         </Router>
//       </div>
//     </Fragment>
//   )
// }