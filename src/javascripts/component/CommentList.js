import React from "react";
import { connect } from "react-redux";
import { delComment } from "../actions/comments";
import Comment from "./Comment";

const CommentList = ({
  userDB,
  comments,
  activeTask,
  onCommentDeleteClick
}) => {
  return (
    <ul className="o-list-bare  c-detail__comment">
      {comments.map(comment => {
        if (comment.taskid === activeTask) {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              userDB={userDB}
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
    activeTask: state.activeTask
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
