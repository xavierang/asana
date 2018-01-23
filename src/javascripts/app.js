// import "./modules";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers/todoApp";
import "../../node_modules/svgxuse/svgxuse";

import App from "./component/App";

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#main")
);
