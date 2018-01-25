import React from "react";
import { connect } from "react-redux";

import Task from "./Task";
import { delTodos, activeTodos, updateTaskTodos } from "../actions/todos";
import { sprite } from "../helper";

const TaskList = ({
  todos,
  activeId,
  onBackSpace,
  onFocusSetActive,
  onKeyUp
}) => (
  <div className="o-card__body">
    <div className="c-list__body">
      <ul className="o-list-bare">
        {todos.map(todo => (
          <Task
            key={todo.id}
            id={todo.id}
            task={todo.task}
            activeId={activeId}
            onBackSpace={onBackSpace}
            onFocusSetActive={onFocusSetActive}
            onKeyUp={onKeyUp}
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

const mapStateToProps = state => {
  return {
    todos: state.todos,
    activeId: state.activeTask
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
