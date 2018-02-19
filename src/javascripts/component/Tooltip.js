import React from "react";

import { sprite } from "../helper";

class Tooltip extends React.Component {
  render() {
    return (
      <div className="c-tooltip">
        <div className="c-tooltip__header">
          <p className="c-text  c-text--faded">VIEW</p>
          <button
            className="c-icon  c-icon--small  c-icon--right  c-icon--blue"
            onClick={this.props.toggleTooltip}
          >
            {sprite("cross")}
          </button>
        </div>

        <div className="c-tooltip__radio">
          <label className="c-text">
            <input
              type="radio"
              name="status"
              value="SHOW_INCOMPLETE"
              checked={this.props.visibilityFilter === "SHOW_INCOMPLETE"}
              onChange={e => {
                //dispatch action
                this.props.onRadioChange(e.target.value);
              }}
            />{" "}
            Incomplete Task
          </label>

          <label className="c-text">
            <input
              type="radio"
              name="status"
              value="SHOW_COMPLETED"
              checked={this.props.visibilityFilter === "SHOW_COMPLETED"}
              onChange={e => {
                //dispatch action
                this.props.onRadioChange(e.target.value);
              }}
            />{" "}
            Completed Task
          </label>

          <label className="c-text">
            <input
              type="radio"
              name="status"
              value="SHOW_ALL"
              checked={this.props.visibilityFilter === "SHOW_ALL"}
              onChange={e => {
                //dispatch action
                this.props.onRadioChange(e.target.value);
              }}
            />{" "}
            All Task
          </label>
        </div>

        <div className="c-tooltip__dropdown">
          <p className="c-text  c-text--faded">SORT</p>
          <select
            className="c-tooltip__select  c-btn  c-btn--border"
            name="sort-by"
          >
            <option defaultValue="">None</option>
            <option value="project">Project</option>
            <option value="due-date">Due Date</option>
            <option value="likes">Likes</option>
          </select>
          <button className="c-icon">{sprite("chevron-thin-down")}</button>
        </div>
      </div>
    );
  }
}

export default Tooltip;
