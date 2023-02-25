const { combineReducers, applyMiddleware, legacy_createStore } = require("redux");
import thunk from "redux-thunk";
import { reducer as navReducer } from "./nav/nav.reducer";



const rootReducer = combineReducers({navReducer});

export const store = legacy_createStore(navReducer, applyMiddleware(thunk));

