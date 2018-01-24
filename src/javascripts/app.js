// import "./modules";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import todos from "./reducers/todos";
import comments from "./reducers/comments";
import "../../node_modules/svgxuse/svgxuse";

import App from "./component/App";

const todoApp = combineReducers({
  todos,
  comments
});

let store = createStore(
  todoApp /* preloadedState,*/,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#main")
);
