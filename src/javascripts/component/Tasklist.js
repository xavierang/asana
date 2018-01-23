import React from "react";

import { sprite } from "../helper";

class Tasklist extends React.Component {
  togglePlaceHolder() {}
  render() {
    return (
      <div className="c-list__body">
        <ul className="o-list-bare">
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
              <textarea
                className="c-text  c-text--textarea  c-text--flex"
                placeholder=""
                onFocus={e => (e.target.placeholder = "Write a task name")}
                onBlur={e => (e.target.placeholder = "")}
              />
              <button className="u-button-reset c-icon c-icon--hover  c-icon--hidden">
                {sprite("circle")}
              </button>
            </div>
          </li>

          {/* {% for i in range(0,25) -%}
    <li className="c-taskitem c-taskitem--nohover o-list-bare__item">
        <div className="c-taskitem--left"></div>
        <div className="c-taskitem--right"></div>
    </li> {%- endfor %} */}
        </ul>
      </div>
    );
  }
}

export default Tasklist;
