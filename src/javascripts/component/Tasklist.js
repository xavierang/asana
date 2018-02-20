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
  activeUser,
  visibilityFilter,
  onBackSpace,
  onFocusSetActive,
  onKeyUp,
  onCheckMark
}) => (
  <div className="o-card__body">
    <div className="c-list__body">
      <ul className="o-list-bare">
        {visibleTask(filteredTask(todos, activeUser), visibilityFilter).map(
          todo => (
            <Task
              key={todo.id}
              todo={todo}
              onBackSpace={onBackSpace}
              onFocusSetActive={onFocusSetActive}
              onKeyUp={onKeyUp}
              onCheckMark={onCheckMark}
            />
          )
        )}
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

const filteredTask = (todos, activeUser) => {
  console.log(todos.filter(todo => todo.user === activeUser));
  return todos.filter(todo => todo.user === activeUser);
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    activeUser: state.activeUser,
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
      console.log(id, donetime);
      dispatch(toggleTodos(id, donetime));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
