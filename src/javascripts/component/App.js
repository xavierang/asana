import React from "react";
import { connect } from "react-redux";

//import actions
import {
  updateTaskTodos,
  updateDescTodos,
  toggleTodos,
  activeTodos
} from "../actions/todos";

import { getComment } from "../actions/comments";
import { getTodos } from "../actions/todos";

//import components needed to render
import Header from "./Header";
import Tasklist from "./Tasklist";
import Form from "./Form";
import Info from "./Info";
import CommentForm from "./CommentForm";

import { sprite } from "../helper";

class App extends React.Component {
  componentWillMount() {
    console.log("mounted");
    this.props.getComment();
    this.props.getTodos();
  }

  render() {
    const {
      todos,
      activeTask,
      onTaskChange,
      onDescChange,
      onCheckMark,
      onCloseForm
    } = this.props;

    return (
      <div className="o-flex">
        <div className="o-flex--section">
          <section className="o-card">
            <Header />
            <Tasklist />
          </section>
        </div>

        <div
          className={`o-flex--section ${
            activeTask === "NONE" ? "u-hidden" : ""
          }`}
        >
          <section className="o-card">
            <Form
              selectedtask={todos.find(todo => todo.id === activeTask)}
              onTaskChange={onTaskChange}
              onDescChange={onDescChange}
              onCheckMark={onCheckMark}
              onCloseForm={onCloseForm}
            />
            <Info selectedtask={todos.find(todo => todo.id === activeTask)} />
            <CommentForm
              selectedtask={todos.find(todo => todo.id === activeTask)}
            />
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    activeTask: state.activeTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTaskChange: (id, text) => {
      dispatch(updateTaskTodos(id, text));
    },
    onDescChange: (id, text) => {
      dispatch(updateDescTodos(id, text));
    },
    onCheckMark: (id, donetime) => {
      dispatch(toggleTodos(id, donetime));
    },
    onCloseForm: () => {
      dispatch(activeTodos("NONE"));
    },
    getComment: () => {
      dispatch(getComment());
    },
    getTodos: () => {
      dispatch(getTodos());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
