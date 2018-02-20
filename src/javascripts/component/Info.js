import React from "react";
import moment from "moment";
import ReactTooltip from "react-tooltip";

import CommentList from "./CommentList";
import { sprite } from "../helper";

const Info = ({ selectedtask = {}, userDB }) => {
  if (selectedtask.created !== undefined) {
    const user = Object.keys(userDB)
      .map(u => {
        if (userDB[u].uid === selectedtask.uid) {
          return userDB[u].name;
        }
      })
      .join("");

    console.log(user);

    return (
      <div className="o-card__body">
        <div className="c-form__info">
          <div className="c-detail">
            <div className="c-detail__time">
              <ReactTooltip />
              <p className="c-text  c-text--small  c-text--faded">
                {user} created task.
                <b data-tip={moment(selectedtask.created).format("LLL")}>
                  &nbsp;&nbsp;&nbsp;
                  {moment(selectedtask.created).calendar()}
                </b>
              </p>
              <p className="c-text  c-text--small  c-text--faded">
                {user} assigned to you.
                <b data-tip={moment(selectedtask.created).format("LLL")}>
                  &nbsp;&nbsp;&nbsp;
                  {moment(selectedtask.created).calendar()}
                </b>
              </p>
              {selectedtask.completed && (
                <div className="o-layout--stretch  o-layout--large">
                  <button className="c-icon  c-icon--small  is--completed ">
                    {sprite("filled-check")}
                  </button>
                  <p className="c-text  c-text--faded">
                    <b className="c-text  is--completed">
                      {user} completed this task
                    </b>{" "}
                    &nbsp;&nbsp;&nbsp;
                    {moment(selectedtask.donetime).format("LLLL")}{" "}
                  </p>
                </div>
              )}
              {!selectedtask.completed &&
                selectedtask.donetime && (
                  <p className="c-text  c-text--small  c-text--faded">
                    {user} marked incomplete.<b>
                      &nbsp;&nbsp;&nbsp;
                      {moment(selectedtask.donetime).calendar()}
                    </b>
                  </p>
                )}
            </div>

            <CommentList userDB={userDB} />
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
