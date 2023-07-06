// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// interface Post {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// }

// interface TodoProps {
//   userId: number;
// }

// interface TodoState {
//   posts: Post[];
// }

// class Todo extends Component<TodoProps, TodoState> {
//   state: TodoState = {
//     posts: [],
//   };

//   componentDidMount() {
//     const { userId } = this.props;
//     this.fetchPosts(userId);
//   }

//   fetchPosts = (userId: number) => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//       .then((response) => {
//         this.setState({ posts: response.data });
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   };

//   render() {
//     const { posts } = this.state;

//     return (
//       <div>
//         <h2>Todos</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>Body</th>
//             </tr>
//           </thead>
//           <tbody>
//             {posts.map((post) => (
//               <tr key={post.id}>
//                 <td>{post.id}</td>
//                 <td>{post.title}</td>
//                 <td>{post.body}</td>
//                 <td>
//                   <Link
//                     to={`/posts/${post.userId}/comments`}
//                     className="btn btn-primary btn-sm"
//                   >
//                     View Comments
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <Link to={`/`} className="btn btn-primary btn-sm">
//           Back Home
//         </Link>
//       </div>
//     );
//   }
// }

// export default Todo;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../Redux/reducers/rootReducer";
import { fetchTodos } from "../../Redux/actions/actions";

interface Todo {
  id: any;
  userId:any;
  title: string;
  body: string;
  
}

interface TodoProps {
  userId: any;
  fetchTodos: (userId: any) => void;
  todos: Todo[];
}

class Todo extends Component<TodoProps> {
  componentDidMount() {
    const { userId, fetchTodos } = this.props;
    fetchTodos(userId);
  }

  render() {
    const { todos } = this.props;

    return (
      <div>
        <h2>Todos</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.body}</td>
                <td>
                  <Link
                    to={`/todos/${todo.userId}/comments`}
                    className='btn btn-primary btn-sm'
                  >
                    View Comments
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={`/`} className='btn btn-primary btn-sm'>
          Back Home
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { fetchTodos })(Todo);
