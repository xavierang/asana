import React from "react";

import { sprite } from "../helper";

const Comment = ({ id, text, onCommentDeleteClick }) => {
  return (
    <li className="c-comment">
      <div className="c-comment__header">
        <div className="c-avatar" />
      </div>

      <div className="c-comment__body">
        <div className="c-comment--user">
          <p className="c-text">
            Xavier Ang
            <span className="c-text  c-text--faded"> Today at 16:19</span>
          </p>
          <button
            className="u-button-reset  c-icon  c-icon--hover  c-icon--hidden"
            onClick={() => onCommentDeleteClick(id)}
          >
            {sprite("cross")}
          </button>
        </div>
        <div className="c-comment--content">
          <p className="c-text">{text}</p>
        </div>
      </div>
    </li>
  );
};

export default Comment;
