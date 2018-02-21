import React from "react";
import moment from "moment";
import ReactTooltip from "react-tooltip";
import fetchJsonp from "fetch-jsonp";

import CommentList from "./CommentList";
import { sprite } from "../helper";

// async function getUserDetailsFromFirebase(selectedtask) {
//   console.log("1");
//   const userFetch = await fetch(
//     "https://us-central1-asana-xavier.cloudfunctions.net/getUserDetails",
//     {
//       body: JSON.stringify({ uid: [selectedtask.uid] }),
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "content-type": "application/json"
//       }
//     }
//   );
//   console.log("2");

//   const U = await userFetch.json();
//   console.log("3");
//   console.log(U);

//   return U;
// }

class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentWillReceiveProps() {
    if (this.props.selectedtask !== undefined) {
      fetch(
        "https://us-central1-asana-xavier.cloudfunctions.net/getUserDetails",
        {
          body: JSON.stringify({ uid: [this.props.selectedtask.uid] }),
          method: "POST",
          mode: "cors",
          headers: {
            "content-type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          if (data) {
            this.setState({
              users: data.users[0].displayName
            });
          }
        });
    }
  }

  render() {
    const { selectedtask = {}, userDB } = this.props;
    const { users } = this.state;

    if (selectedtask.created !== undefined) {
      console.log(users);
      console.log(selectedtask);
      return (
        <div className="o-card__body">
          <div className="c-form__info">
            <div className="c-detail">
              <div className="c-detail__time">
                <ReactTooltip />
                <p className="c-text  c-text--small  c-text--faded">
                  {users} created task.
                  <b data-tip={moment(selectedtask.created).format("LLL")}>
                    &nbsp;&nbsp;&nbsp;
                    {moment(selectedtask.created).calendar()}
                  </b>
                </p>
                <p className="c-text  c-text--small  c-text--faded">
                  {users} assigned to you.
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
                        {users} completed this task
                      </b>{" "}
                      &nbsp;&nbsp;&nbsp;
                      {moment(selectedtask.donetime).format("LLLL")}{" "}
                    </p>
                  </div>
                )}
                {!selectedtask.completed &&
                  selectedtask.donetime && (
                    <p className="c-text  c-text--small  c-text--faded">
                      {users} marked incomplete.<b>
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
  }
}

export default Info;
