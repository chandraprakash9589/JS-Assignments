import React, { Component } from 'react';

interface PostListProps {
  posts: Post[];
}

interface Post {
  id: number;
  title: string;
  body: string;
}

class PostPage extends Component<any> {
  render() {
    const { posts }: any = this.props;

    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map((post:any) => (
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

export default PostPage;
