import React from "react";
import { connect } from "react-redux";
import { delComment } from "../actions/comments";
import Comment from "./Comment";

const CommentList = ({ comments, activeId, onCommentDeleteClick }) => {
  return (
    <ul className="c-detail__comment">
      {comments.map(comment => {
        if (comment.taskid === activeId) {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              text={comment.text}
              created={comment.created}
              onCommentDeleteClick={onCommentDeleteClick}
            />
          );
        }
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments,
    activeId: state.activeTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCommentDeleteClick: id => {
      dispatch(delComment(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
