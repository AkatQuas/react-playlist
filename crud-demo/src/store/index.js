import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import games from "./reducers/games";

export default createStore(
    combineReducers({
        games
    }),
    {},
    applyMiddleware(thunk, logger)
)