import React from "react";
import { connect } from "react-redux";

//import actions
import { updateTaskTodos, updateDescTodos } from "../actions/todos";

//import components needed to render
import Header from "./Header";
import Tasklist from "./Tasklist";
import Form from "./Form";
import Info from "./Info";
import CommentForm from "./CommentForm";

const App = ({ todos, activeId, onTaskChange, onDescChange }) => {
  return (
    <div className="o-flex">
      <div className="o-flex--section">
        <section className="o-card">
          <Header />
          <Tasklist />
        </section>
      </div>

      <div className="o-flex--section">
        <section className="o-card">
          <Form
            selectedtask={todos.find(todo => todo.id === activeId)}
            onTaskChange={onTaskChange}
            onDescChange={onDescChange}
          />
          <Info selectedtask={todos.find(todo => todo.id === activeId)} />
          <CommentForm
            selectedtask={todos.find(todo => todo.id === activeId)}
          />
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    activeId: state.activeTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTaskChange: (id, text) => {
      dispatch(updateTaskTodos(id, text));
    },
    onDescChange: (id, text) => {
      dispatch(updateDescTodos(id, text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
