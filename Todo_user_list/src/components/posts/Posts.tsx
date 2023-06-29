import React from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>
              <Link to={`/posts/${post.id}/comments`}>View Comments</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;

export {}; // Add this line to make it a module
