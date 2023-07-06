import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../Redux/reducers/rootReducer";
import { fetchComments } from "../../Redux/actions/actions";
import { Link } from "react-router-dom";

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsProps {
  postId: number;
  fetchComments: (postId: number) => void;
  comments: Comment[];
}

class Comments extends Component<CommentsProps> {
  componentDidMount() {
    const { postId, fetchComments } = this.props;
    fetchComments(postId);
  }

  render() {
    const { comments } = this.props;

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
        <Link to={`/`} className="btn btn-primary btn-sm">
          Back Home
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  comments: state.comment.comments, // Update the property access to match your actual reducer name
});

export default connect(mapStateToProps, { fetchComments })(Comments);
