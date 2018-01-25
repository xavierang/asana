import React from "react";

import CommentList from "./CommentList";

const Info = ({ selectedtask = {} }) => {
  if (!isNaN(selectedtask.created)) {
    return (
      <div className="o-card__body">
        <div className="c-form__info">
          <div className="c-detail">
            <div className="c-detail__time">
              <p className="c-text c-text--small c-text--faded">
                Task created.
                <b>{selectedtask.created} </b>
              </p>

              <p className="c-text c-text--small c-text--faded">
                Assigned to you.
                <b />
              </p>
            </div>

            <CommentList />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="o-card__body">
        <div className="c-form__info">
          <div className="c-detail">
            <div className="c-detail__time" />
          </div>
        </div>
      </div>
    );
  }
};

export default Info;
