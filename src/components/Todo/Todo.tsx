import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  // completed: boolean;
}

interface PostsProps {
  userId: number;
  // completed:boolean;
}

interface PostsState {
  posts: Post[];
}

class Posts extends Component<PostsProps, PostsState> {
  state: PostsState = {
    posts: [],
  };

  componentDidMount() {
    const { userId } = this.props;
    this.fetchPosts(userId);
  }

  fetchPosts = (userId: number) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  render() {
    const { posts } = this.state;
// const {completed} =this.props
    return (
      <div>
        <h2>Todos</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              {/* <th>Completed</th> */}
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                {/* <td>
                  {completed ? (
                    <span>Completed</span>
                  ) : (
                    <span>Not Completed</span>
                  )}
                </td> */}
                <td>
                  <Link
                    to={`/posts/${post.userId}/comments`}
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

export default Posts;
