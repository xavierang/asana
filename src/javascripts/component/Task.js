import React from "react";
import moment from "moment";

import { sprite } from "../helper";
import FilledCheck from "./FilledCheck";
import UnfilledCheck from "./UnfilledCheck";

class Task extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    const {
      todo,
      onBackSpace,
      onFocusSetActive,
      onKeyUp,
      onCheckMark
    } = this.props;
    return (
      <li
        className={`c-taskitem o-list-bare__item" ${
          todo.completed ? "c-taskitem--completed" : ""
        }`}
        ref={li => {
          this.listitem = li;
        }}
      >
        <div className="c-taskitem--left">
          <button className="u-button-reset c-icon c-icon--hover  c-icon--hidden">
            {sprite("grid")}
          </button>
        </div>
        <div className="c-taskitem--right">
          <button
            className={`u-button-reset c-icon c-icon--aquamarine ${
              todo.completed ? "c-icon--completed" : ""
            }`}
            onClick={e => {
              if (this.listitem.classList.contains("c-taskitem--completed")) {
                this.listitem.classList.remove("c-taskitem--completed");
              } else {
                this.listitem.classList.add("c-taskitem--completed");
              }
              setTimeout(() => {
                onCheckMark(todo.id, moment());
              }, 500);
            }}
          >
            {todo.completed ? <FilledCheck /> : <UnfilledCheck />}
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
            value={todo.task}
            onFocus={e => {
              e.target.placeholder = "Write a task name";
              onFocusSetActive(todo.id);
            }}
            onBlur={e => (e.target.placeholder = "")}
            onKeyDown={e => {
              if (e.keyCode === 8 && e.target.value === "") {
                onBackSpace(todo.id);
              }
            }}
            onChange={e => {
              onKeyUp(todo.id, e.target.value);
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
