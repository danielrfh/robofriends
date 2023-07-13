import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { searchRobots, requestRobots } from "./reducers";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons"; // CSS Library similar to Bootstrap
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

/**
 * Creates a logger with the specified configuration options.
 * @param {Object} options - The configuration options for the logger.
 * @param {string} options.level - The log level to use (e.g. "info", "debug", "error").
 * @param {boolean} options.collapsed - Whether to collapse log messages in the console.
 * @returns The created logger instance.
 */
const logger = createLogger({
  level: "info",
  collapsed: true,
});

/**
 * Combines multiple reducers into a single root reducer.
 * @param {Object} reducers - An object containing the reducers to be combined.
 * @returns The combined root reducer.
 */
const rootReducer = combineReducers({ searchRobots, requestRobots });

/**
 * Creates a Redux store with the specified root reducer and middleware.
 * @param {Function} rootReducer - The root reducer function that combines all the reducers.
 * @param {Array} middleware - An array of middleware functions to apply to the store.
 * @returns {Object} - The created Redux store.
 */
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

/**
 * Creates a React root element and attaches it to the specified HTML element.
 * @param {HTMLElement} element - The HTML element to attach the React root to.
 * @returns {ReactDOM.Root} - The created React root element.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
