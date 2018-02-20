import "eventsource-polyfill";

// import "./modules";
import React from "react";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

//import reducers
import todos from "./reducers/todos";
import comments from "./reducers/comments";
import activeTask from "./reducers/activeTask";
import activeUser from "./reducers/activeUser";
import visibilityFilter from "./reducers/visibilityFilter";

//to fix icons on IE11
import "../../node_modules/svgxuse/svgxuse";

import App from "./component/App";

const rootReducer = combineReducers({
  todos,
  comments,
  activeTask,
  activeUser,
  visibilityFilter
});

// const logger = createLogger();

let store = createStore(
  rootReducer /* preloadedState,*/,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#main")
);
