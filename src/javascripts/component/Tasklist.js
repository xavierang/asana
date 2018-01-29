import React from "react";
import { connect } from "react-redux";

import Task from "./Task";
import {
  delTodos,
  activeTodos,
  updateTaskTodos,
  toggleTodos
} from "../actions/todos";
import { sprite } from "../helper";

const TaskList = ({
  todos,
  visibilityFilter,
  onBackSpace,
  onFocusSetActive,
  onKeyUp,
  onCheckMark
}) => (
  <div className="o-card__body">
    <div className="c-list__body">
      <ul className="o-list-bare">
        {visibleTask(todos, visibilityFilter).map(todo => (
          <Task
            key={todo.id}
            todo={todo}
            onBackSpace={onBackSpace}
            onFocusSetActive={onFocusSetActive}
            onKeyUp={onKeyUp}
            onCheckMark={onCheckMark}
          />
        ))}

        {/* {% for i in range(0,25) -%}
      <li className="c-taskitem c-taskitem--nohover o-list-bare__item">
          <div className="c-taskitem--left"></div>
          <div className="c-taskitem--right"></div>
      </li> {%- endfor %} */}
      </ul>
    </div>
  </div>
);

const visibleTask = (todos, visibilityFilter) => {
  if (visibilityFilter === "SHOW_ALL") {
    return todos;
  } else if (visibilityFilter === "SHOW_COMPLETED") {
    return todos.filter(todo => todo.completed);
  } else {
    return todos.filter(todo => !todo.completed);
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBackSpace: id => {
      dispatch(delTodos(id));
    },
    onFocusSetActive: id => {
      dispatch(activeTodos(id));
    },
    onKeyUp: (id, text) => {
      dispatch(updateTaskTodos(id, text));
    },
    onCheckMark: (id, donetime) => {
      dispatch(toggleTodos(id, donetime));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
