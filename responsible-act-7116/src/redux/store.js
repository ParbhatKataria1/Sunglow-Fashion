const { combineReducers, applyMiddleware, legacy_createStore } = require("redux");
import thunk from "redux-thunk";
import { reducer as navReducer } from "./nav/nav.reducer";
import { reducer as cartReducer } from "./cart/cart.reducer";



const rootReducer = combineReducers({navReducer, cartReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

