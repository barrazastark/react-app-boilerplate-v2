import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "__redux__/reducers";

const middlewares = [
  thunk,
  createLogger({
    collapsed: 1,
    diff: 1,
  }),
];

const reducers = combineReducers({
  auth: authReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, {}, enhancer);

export default store;
