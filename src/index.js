import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//store holds the whole state treee of our react app
//it's where our app state live. We can see it as a big JavaScript object
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./App";
//reducer is a pure function taht receives old state and
//an action, then returns the updated state
//it handles only sychronous code
import reducer from "./store/reducer";

// middleware redux-thunk is needed for asynchronous code
const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  //connecting store to react
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
