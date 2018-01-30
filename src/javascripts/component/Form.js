import React from "react";
import moment from "moment";
import Textarea from "react-expanding-textarea";

import FilledCheck from "./FilledCheck";
import UnfilledCheck from "./UnfilledCheck";

import { sprite } from "../helper";

const Form = ({
  selectedtask = { task: "", description: "" },
  onTaskChange,
  onDescChange,
  onCheckMark,
  onCloseForm
}) => {
  const toggleInput = e => {
    const target = e.target;

    if (target.localName === "button") {
      //button is the target
      if (target.classList.contains("u-hidden-visually")) {
        target.classList.remove("u-hidden-visually");
        target.previousElementSibling.classList.add("u-hidden-visually");
      } else {
        target.classList.add("u-hidden-visually");
        target.previousElementSibling.focus();
        target.previousElementSibling.classList.remove("u-hidden-visually");
      }
    } else {
      //input is the target
      if (target.classList.contains("u-hidden-visually")) {
        target.classList.remove("u-hidden-visually");
        target.nextElementSibling.classList.add("u-hidden-visually");
      } else {
        target.classList.add("u-hidden-visually");
        target.nextElementSibling.classList.remove("u-hidden-visually");
      }
    }
  };

  return (
    <div className="o-card__header">
      <div className="c-form__header">
        <button
          className="u-button-reset  c-icon  c-icon--hover  c-icon--right"
          onClick={() => {
            onCloseForm();
          }}
        >
          {sprite("cross")}
        </button>
      </div>

      <div className="c-form__editable">
        <div className="c-forminput">
          <div className="c-forminput__project">
            <label htmlFor="description" className="u-hidden-visually">
              Project Name
            </label>
            <input
              className="c-text c-text--animation u-hidden-visually"
              type="text"
              placeholder=""
              onFocus={e => (e.target.placeholder = "Add to Project")}
              onBlur={e => {
                e.target.placeholder = "";
                e.target.value = "";
                toggleInput(e);
              }}
            />
            <button
              className="u-button-reset  c-icon  c-icon--hover  c-icon--text"
              onClick={e => toggleInput(e)}
            >
              Add to a Project
            </button>
          </div>

          <div className="c-forminput__task">
            <button
              className={`u-button-reset  c-icon  c-icon--big  c-icon--aquamarine ${
                selectedtask.completed ? "c-icon--completed " : ""
              }`}
              onClick={e => {
                onCheckMark(selectedtask.id, moment());
              }}
            >
              {selectedtask.completed ? <FilledCheck /> : <UnfilledCheck />}
            </button>
            <label htmlFor="description" className="u-hidden-visually">
              Task Name
            </label>
            <input
              className="c-text c-text--large  c-text--animation"
              type="text"
              placeholder="Write a task name"
              value={selectedtask.task}
              onChange={e => {
                onTaskChange(selectedtask.id, e.target.value);
              }}
            />
          </div>

          <div className="c-forminput__desc">
            <button className="u-button-reset  c-icon  c-icon--faded">
              {sprite("text")}
            </button>
            <label htmlFor="description" className="u-hidden-visually">
              Description
            </label>
            <Textarea
              className="c-text  c-text--faded  c-text--animation"
              type="text"
              placeholder="Description"
              value={selectedtask.description}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Description")}
              onChange={e => {
                onDescChange(selectedtask.id, e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
