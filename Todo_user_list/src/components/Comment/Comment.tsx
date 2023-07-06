import React, { Component } from 'react';
import axios from 'axios';

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsState {
  comments: Comment[];
}

interface CommentsProps {
  postId:number;
}

class Comments extends Component<CommentsProps, CommentsState> {
  state: CommentsState = {
    comments: [],
  };

  componentDidMount() {
    const { postId } = this.props;
    this.fetchComments(postId);
  }

  fetchComments = (postId: number) => {
    axios
      .get(`http://localhost:3008/posts/${postId}/comments`)
      .then((response) => {
        this.setState({ comments: response.data });
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  };

  render() {
    const { comments } = this.state;

    return (
      <div>
        <h2>Comments</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Comments;