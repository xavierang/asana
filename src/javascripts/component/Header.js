import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import Tooltip from "./Tooltip";
import { addTodos, activeTodos, setFilter } from "../actions/todos";

import { sprite } from "../helper";

let Header = ({ visibilityFilter, onAddTaskBtn, onRadioChange }) => {
  const toggleTooltip = () => {
    const tooltip = document.getElementsByClassName("c-tooltip");
    const tooltipClasses = tooltip[0].classList;

    if (tooltipClasses.contains("u-show")) {
      tooltipClasses.remove("u-show");
      document.removeEventListener("click", handleClick, false);
    } else {
      tooltipClasses.add("u-show");
      document.addEventListener("click", handleClick, false);
    }
  };

  const handleClick = e => {
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
      toggleTooltip();
    }
  };

  return (
    <header className="o-card__header">
      <div className="c-list__header">
        <button
          className="c-btn  c-btn--filled"
          onClick={e => {
            e.preventDefault();
            onAddTaskBtn();
          }}
        >
          Add Task
        </button>
        <button className="c-btn  c-btn--border  c-btn--hidden">
          Add Section
        </button>
        <button
          className="c-icon  c-icon--small  c-icon--blue  c-icon--right"
          onClick={() => toggleTooltip()}
        >
          {sprite("equalizer")}
        </button>

        <Tooltip
          toggleTooltip={toggleTooltip}
          onRadioChange={onRadioChange}
          visibilityFilter={visibilityFilter}
        />
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTaskBtn: () => {
      dispatch(addTodos(moment()));
    },

    onRadioChange: filter => {
      dispatch(setFilter(filter));
    }
  };
};

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
