import React from 'react';

interface Comment {
  id: number;
  name: string;
  body: string;
}

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
