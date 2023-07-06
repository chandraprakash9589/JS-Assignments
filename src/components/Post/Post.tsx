// import React, { Component } from 'react';
// import { Link} from 'react-router-dom';
// import axios from 'axios';

// interface Post {
//   id: any;
//   userId: number;
//   title: string;
//   body: string;
// }

// // export type Props = {
// //   quotes?: any;
// //   navigate: any;
// //   params?: any;
// // };
// // class MovieQuote extends React.Component<Props> {
// //   constructor(props: any) {
// //     super(props);

// //     this.state = {
// //       quotes: [],
// //     };
// //   }


// export type PostsProps  = {
//   userId:string;
// }

// interface PostsState {
//   posts: Post[];
// }

// class Posts extends Component<PostsProps, PostsState> {
//   state: PostsState = {
//     posts: [],
//   };

//   componentDidMount():void {
//     const { userId } = this.props;
//     this.fetchPosts(userId);
//   }

//   fetchPosts = (userId: any) => {
//     const currentURL = window.location.href;
//     const currentID = currentURL.split("/");
//     console.log(currentID,"=========>>>>>>");
//     console.log(currentURL,"=========>>>>>>url")
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//       .then((response) => {
//         this.setState({ posts: response.data });
//       })
//       .catch((error) => {
//         console.error('Error fetching posts:', error);
//       });
//   };

//   render() {
//     const { posts } = this.state;

//     return (
//       <div>
//         <h2>Posts</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>body</th>
//             </tr>
//           </thead>
//           <tbody>
//             {posts.map((post) => (
//               <tr key={post.id}>
//                 <td>{post.id}</td>
//                 <td>{post.title}</td>
//                 <td>{post.body}</td>
//                 <td>
//                   <Link to={`/posts/${post.userId}/comments`} className="btn btn-primary btn-sm">
//                     View Comments
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <Link to={`/`} className="btn btn-primary btn-sm">
//                    Back Home
//                   </Link>
//       </div>
//     );
//   }
// }

// export default Posts;



import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../Redux/actions/actions';
import { RootState } from '../../Redux/reducers/rootReducer';

export type Post = {
  id: number;
  postId: number;
  title: string;
  body: string;
};

interface PostsProps {
  userId: string;
  fetchPosts: (userId: string) => void;
  posts: Post[];
}

 export class Posts extends Component<PostsProps> {
  componentDidMount(): void {
    const { userId, fetchPosts } = this.props;
    fetchPosts(userId);
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <h2>Posts</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <Link to={`/posts/${post.postId}/comments`} className="btn btn-primary btn-sm">
                    View Comments
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={`/`} className="btn btn-primary btn-sm">
          Back Home
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state:RootState) => ({
  posts: state.post.posts,
});

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

