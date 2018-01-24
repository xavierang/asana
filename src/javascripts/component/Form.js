import React from "react";

import TaskForm from "./TaskForm";

import { sprite } from "../helper";

class Form extends React.Component {
  constructor() {
    super();
    this.toggleInput = this.toggleInput.bind(this);
  }
  toggleInput(e) {
    const target = e.target;
    console.log(target);

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
  }

  render() {
    return (
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
                this.toggleInput(e);
              }}
            />
            <button
              className="u-button-reset  c-icon  c-icon--hover  c-icon--text"
              onClick={e => this.toggleInput(e)}
            >
              Add to a Project
            </button>
          </div>

          <TaskForm />

          <div className="c-forminput__desc">
            <button className="u-button-reset  c-icon  c-icon--faded">
              {sprite("text")}
            </button>
            <label htmlFor="description" className="u-hidden-visually">
              Description
            </label>
            <textarea
              className="c-text c-text  c-text--faded  c-text--animation"
              type="text"
              placeholder="Description"
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Description")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
