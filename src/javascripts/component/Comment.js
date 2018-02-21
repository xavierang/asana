import React from "react";
import moment from "moment";

import { sprite } from "../helper";

class Comment extends React.Component {
  render() {
    const { comment, onCommentDeleteClick, user } = this.props;

    if (comment.created) {
      return (
        <li className="o-list-bare__item  c-comment">
          <div className="c-comment__header">
            <div
              className="c-avatar"
              style={{ backgroundImage: `url(${user.photoURL}` }}
            />
          </div>

          <div className="c-comment__body">
            <div className="c-comment--user">
              <p className="c-text">
                {user.name}
                <span className="c-text  c-text--faded">
                  &nbsp;&nbsp;&nbsp;
                  {moment(comment.created)
                    .startOf("second")
                    .fromNow()}
                </span>
              </p>
              <button
                className="c-icon  c-icon--small  c-icon--blue  c-icon--hidden"
                onClick={() => {
                  onCommentDeleteClick(comment.id);
                }}
              >
                {sprite("cross")}
              </button>
            </div>
            <div className="c-comment--content">
              <p className="c-text">{comment.text}</p>
            </div>
          </div>
        </li>
      );
    } else {
      return;
    }
  }
}

export default Comment;
