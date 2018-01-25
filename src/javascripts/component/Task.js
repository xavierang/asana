import React from "react";

import { sprite } from "../helper";

class Task extends React.Component {
  componentDidMount() {
    console.log("mounted!");
    this.textInput.focus();
  }

  render() {
    const { task, id, onBackSpace, onFocusSetActive, onKeyUp } = this.props;
    return (
      <li className="c-taskitem o-list-bare__item">
        <div className="c-taskitem--left">
          <button className="u-button-reset c-icon c-icon--hover  c-icon--hidden">
            {sprite("grid")}
          </button>
        </div>
        <div className="c-taskitem--right">
          <button className="u-button-reset c-icon c-icon--aquamarine">
            {sprite("checkmark2")}
          </button>
          <label htmlFor="description" className="u-hidden-visually">
            Task Name
          </label>
          <input
            ref={input => {
              this.textInput = input;
            }}
            className="c-text  c-text--textarea  c-text--flex"
            placeholder=""
            value={task}
            onFocus={e => {
              e.target.placeholder = "Write a task name";
              onFocusSetActive(id);
            }}
            onBlur={e => (e.target.placeholder = "")}
            onKeyDown={e => {
              if (e.keyCode === 8 && e.target.value === "") {
                onBackSpace(id);
              }
            }}
            onChange={e => {
              onKeyUp(id, e.target.value);
            }}
          />
          <button className="u-button-reset c-icon c-icon--hover  c-icon--hidden">
            {sprite("circle")}
          </button>
        </div>
      </li>
    );
  }
}

export default Task;
