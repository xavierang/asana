import React from "react";

import CommentList from "./CommentList";

class Info extends React.Component {
  render() {
    return (
      <div className="c-form__info">
        <div className="c-detail">
          <div className="c-detail__time">
            <p className="c-text c-text--small c-text--faded">
              Task created.
              <b>10:24</b>
            </p>

            <p className="c-text c-text--small c-text--faded">
              Assigned to you.
              <b>10:24</b>
            </p>
          </div>

          <CommentList />
        </div>
      </div>
    );
  }
}

export default Info;
