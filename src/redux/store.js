import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./auth/reducer";

// devtools for debugging in dev environment.
const devTools =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (a) => a;

export const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  compose(applyMiddleware(thunk), devTools)
);
