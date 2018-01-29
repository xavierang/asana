// import "./modules";
import React from "react";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

//import reducers
import todos from "./reducers/todos";
import comments from "./reducers/comments";
import activeTask from "./reducers/activeTask";
import visibilityFilter from "./reducers/visibilityFilter";

//to fix icons on IE11
import "../../node_modules/svgxuse/svgxuse";

import App from "./component/App";

const rootReducer = combineReducers({
  todos,
  comments,
  activeTask,
  visibilityFilter
});

let store = createStore(
  rootReducer /* preloadedState,*/,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#main")
);
