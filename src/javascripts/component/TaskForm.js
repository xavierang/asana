import React from "react";
import { connect } from "react-redux";
import { addTodos } from "../actions/todos";

import { sprite } from "../helper";

const TaskForm = () => (
  <div className="c-forminput__task">
    <button className="u-button-reset  c-icon  c-icon--big  c-icon--aquamarine">
      {sprite("checkmark2")}
    </button>
    <label htmlFor="description" className="u-hidden-visually">
      Task Name
    </label>
    <input
      className="c-text c-text--large  c-text--animation"
      type="text"
      placeholder="Write a task name"
    />
  </div>
);

export default TaskForm;
