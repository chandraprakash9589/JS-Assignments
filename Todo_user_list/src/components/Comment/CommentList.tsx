import React, { Component } from 'react';

interface CommentListProps {
  postId: number;
  comments: Comment[];
}

interface Comment {
  id: number;
  body: string;
}

class CommentList extends Component<CommentListProps> {
  render() {
    const { comments } = this.props;

    return (
      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentList;
