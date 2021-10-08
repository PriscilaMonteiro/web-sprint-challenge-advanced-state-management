import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/index";


export const store = createStore(reducer, applyMiddleware(thunk, logger));