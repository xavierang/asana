import React from "react";
import { connect } from "react-redux";
import { addComment, likeComment } from "../actions/comments";

let Comment = ({ dispatch }) => {
  let input;

  return (
    <div className="c-form__comment">
      <form className="c-formcomment">
        <div className="c-formcomment__header">
          <div className="c-avatar" />
        </div>

        <div className="c-formcomment__body">
          <label htmlFor="description" className="u-hidden-visually">
            Comment
          </label>
          <textarea
            className="c-formcomment__body-top c-text c-formcomment__text"
            id="comment"
            type="text"
            placeholder="Write a comment..."
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e => (e.target.placeholder = "Write a comment...")}
          />

          <div className="c-formcomment__body-btm">
            <button
              className="c-btn c-btn--filled"
              onClick={e => {
                e.preventDefault();
                const commentTextArea = document.getElementById("comment");
                dispatch(addComment(commentTextArea.value));
                commentTextArea.value = "";
              }}
            >
              Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Comment = connect()(Comment);

export default Comment;
