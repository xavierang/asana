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
        const user =
          userDB[
            Object.keys(userDB).filter(u => userDB[u].uid === comment.uid)
          ];
        if (comment.taskid === activeTask) {
          return (
            <Comment
              key={comment.id}
              user={user}
              comment={comment}
              onCommentDeleteClick={onCommentDeleteClick}
              userDB={userDB}
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
