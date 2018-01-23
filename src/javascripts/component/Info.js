import React from "react";

import { sprite } from "../helper";

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

          <div className="c-detail__comment">
            <div className="c-comment">
              <div className="c-comment__header">
                <div className="c-avatar" />
              </div>

              <div className="c-comment__body">
                <div className="c-comment--user">
                  <p className="c-text">
                    Xavier Ang
                    <span className="c-text  c-text--faded">
                      Today at 16:19
                    </span>
                  </p>
                  <button className="u-button-reset  c-icon  c-icon--hover  c-icon--hidden">
                    {sprite("cross")}
                  </button>
                </div>
                <div className="c-comment--content">
                  <p className="c-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
