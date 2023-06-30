import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../store/actions/commentsActions";

import { RootState } from "../../store/types";

import CommentList from "./CommentList";

interface CommentPageProps {
  fetchComments: (postId: number) => void;
  match: any;
  comments: RootState["comments"]["comments"];
}

class CommentPage extends Component<CommentPageProps> {
  componentDidMount() {
    const { fetchComments, match } = this.props;
    const postId = match.params.postId;
    fetchComments(postId);
  }

  render() {
    const { comments, match } = this.props;
    const postId = match.params.postId;

    return (
      <div>
        <h1>Comment Page</h1>
        <CommentList comments={comments} postId={postId} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  comments: state.comments.comments,
});

export default connect(mapStateToProps, { fetchComments })(CommentPage);
