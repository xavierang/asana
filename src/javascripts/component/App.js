import React from "react";
import { connect } from "react-redux";
import firebase from "firebase";

//import actions
import {
  updateTaskTodos,
  updateDescTodos,
  toggleTodos,
  activeTodos,
  getTodos
} from "../actions/todos";

import { getComment } from "../actions/comments";

import { activeUsers } from "../actions/users";

//import components needed to render
import Header from "./Header";
import Tasklist from "./Tasklist";
import Form from "./Form";
import Info from "./Info";
import CommentForm from "./CommentForm";

import { sprite } from "../helper";

class App extends React.Component {
  constructor() {
    super();
    this.logIn = this.logIn.bind(this);
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  }

  componentWillMount() {
    this.props.getComment();
    this.props.getTodos();
  }

  logIn = provider => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(
        function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
          this.props.onLogInSetActive(user.uid);
        }.bind(this)
      )
      .catch(function(error) {
        console.error(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  render() {
    const {
      todos,
      activeTask,
      activeUser,
      onTaskChange,
      onDescChange,
      onCheckMark,
      onCloseForm
    } = this.props;

    if (activeUser === "NONE") {
      return (
        <div className="c-login">
          <header className="c-login__header">
            <a
              href="#"
              className="c-icon  c-icon--big  c-icon--white  c-text--huge  c-text--white"
            >
              {sprite("asana")}
              <span>asana</span>
            </a>
          </header>

          <div className="c-login__body">
            <h2 className="c-text  c-text--huge  c-text--mirage">Log In</h2>
            <button
              className="c-btn  c-btn--filled"
              onClick={() => {
                const u = this.logIn(this.provider);
              }}
            >
              Use Google Account
            </button>

            <div className="c-login__divider  c-text--large">or</div>

            <form action="submit" className="c-login__form">
              <label className="c-text  c-text--small  c-text--gray" htmlFor="">
                EMAIL ADDRESS
              </label>
              <input type="email" />

              <label className="c-text  c-text--small  c-text--gray" htmlFor="">
                PASSWORD
              </label>
              <input type="password" />

              <a
                href=""
                className="c-text--small  c-text--gray  c-text--anchor  c-btn"
              >
                Forgot your password?{" "}
              </a>

              <button className="c-btn  c-btn--filled  c-btn--right  is--disabled">
                Log In
              </button>
            </form>
          </div>

          <footer className="c-login__footer">
            <div>
              <span className="c-text--white">Don't have an account?</span>
              <button className="c-btn  c-btn--transparent">Sign Up</button>
            </div>

            <nav>
              <ul className="o-list-inline  c-login__list">
                <li className="o-list-inline__item">
                  <a
                    href="http://asana.com"
                    target="_blank"
                    className="c-text--white  c-text--anchor"
                  >
                    About Asana
                  </a>
                </li>
                <li className="o-list-inline__item">
                  <a
                    href="http://asana.com/blog"
                    target="_blank"
                    className="c-text--white  c-text--anchor"
                  >
                    Blog
                  </a>
                </li>
                <li className="o-list-inline__item">
                  <a
                    href="http://asana.com/jobs"
                    target="_blank"
                    className="c-text--white  c-text--anchor"
                  >
                    Jobs
                  </a>
                </li>
                <li className="o-list-inline__item">
                  <a
                    href="http://asana.com/help"
                    target="_blank"
                    className="c-text--white  c-text--anchor"
                  >
                    Help
                  </a>
                </li>
                <li className="o-list-inline__item">
                  <a
                    href="http://asana.com/terms"
                    target="_blank"
                    className="c-text--white  c-text--anchor"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      );
    } else {
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
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    activeTask: state.activeTask,
    activeUser: state.activeUser
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
    },
    onLogInSetActive: id => {
      dispatch(activeUsers(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
