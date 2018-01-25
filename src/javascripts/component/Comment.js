import React from "react";
import moment from "moment";

import { sprite } from "../helper";

const Comment = ({ id, text, created, onCommentDeleteClick }) => {
  if (!isNaN(created)) {
    return (
      <li className="c-comment">
        <div className="c-comment__header">
          <div className="c-avatar" />
        </div>

        <div className="c-comment__body">
          <div className="c-comment--user">
            <p className="c-text">
              Xavier Ang
              <span className="c-text  c-text--faded">
                {created.calendar()}
              </span>
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
  }
};

export default Comment;
