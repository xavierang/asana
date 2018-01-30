import React from "react";
import moment from "moment";
import ReactTooltip from "react-tooltip";

import CommentList from "./CommentList";
import { sprite } from "../helper";

const Info = ({ selectedtask = {} }) => {
  if (selectedtask.created !== undefined) {
    return (
      <div className="o-card__body">
        <div className="c-form__info">
          <div className="c-detail">
            <div className="c-detail__time">
              <ReactTooltip />
              <p className="c-text  c-text--small  c-text--faded">
                Xavier Ang created task.
                <b data-tip={moment(selectedtask.created).format("LLL")}>
                  &nbsp;&nbsp;&nbsp;
                  {moment(selectedtask.created).calendar()}
                </b>
              </p>
              <p className="c-text  c-text--small  c-text--faded">
                Xavier Ang assigned to you.
                <b data-tip={moment(selectedtask.created).format("LLL")}>
                  &nbsp;&nbsp;&nbsp;
                  {moment(selectedtask.created).calendar()}
                </b>
              </p>
              {selectedtask.completed && (
                <div className="o-layout--stretch  o-layout--large">
                  <button className="u-button-reset  c-icon  c-icon--completed ">
                    {sprite("filled-check")}
                  </button>
                  <p className="c-text  c-text--faded">
                    <b className="c-text--completed">
                      Xavier Ang completed this task
                    </b>{" "}
                    &nbsp;&nbsp;&nbsp;
                    {moment(selectedtask.donetime).format("LLLL")}{" "}
                  </p>
                </div>
              )}
              {!selectedtask.completed &&
                selectedtask.donetime && (
                  <p className="c-text c-text--small c-text--faded">
                    Xavier Ang marked incomplete.<b>
                      &nbsp;&nbsp;&nbsp;
                      {moment(selectedtask.donetime).calendar()}
                    </b>
                  </p>
                )}
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
