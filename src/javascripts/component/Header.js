import React from "react";

import Tooltip from "./Tooltip";
import { sprite } from "../helper";

class Header extends React.Component {
  constructor() {
    super();

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleTooltip() {
    const tooltip = document.getElementsByClassName("c-tooltip");
    const tooltipClasses = tooltip[0].classList;

    if (tooltipClasses.contains("u-show")) {
      tooltipClasses.remove("u-show");
      document.removeEventListener("click", this.handleClick, false);
    } else {
      tooltipClasses.add("u-show");
      document.addEventListener("click", this.handleClick, false);
    }
  }

  handleClick = e => {
    const tooltipEl = document.getElementsByClassName("c-tooltip");
    let targetEl = e.target;
    let insideFlag = false;

    do {
      if (targetEl == tooltipEl[0]) {
        insideFlag = true;
      }
      targetEl = targetEl.parentNode;
    } while (targetEl !== null);

    if (insideFlag === false) {
      this.toggleTooltip();
    }
  };

  render() {
    return (
      <div className="c-list__header">
        <button className="c-btn  c-btn--border">Add Task</button>
        <button className="c-btn  c-btn--border c-btn--hidden">
          Add Section
        </button>
        <button
          className="u-button-reset  c-icon  c-icon--hover  c-icon--right"
          onClick={() => this.toggleTooltip()}
        >
          {sprite("equalizer")}
        </button>

        <Tooltip toggleTooltip={this.toggleTooltip} />
      </div>
    );
  }
}

export default Header;
