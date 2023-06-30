import React, { Component } from 'react';

interface PostListProps {
  posts: Post[];
}

interface Post {
  id: number;
  title: string;
  body: string;
}

class PostList extends Component<PostListProps> {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;

export {};
