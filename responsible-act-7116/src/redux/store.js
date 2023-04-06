const {
	combineReducers,
	applyMiddleware,
	legacy_createStore,
} = require("redux");
import thunk from "redux-thunk";
import { reducer as navReducer } from "./nav/nav.reducer";
import { reducer as cartReducer } from "./cart/cart.reducer";
import {reducer as shipReducer} from './shippingRedux/shipping.reducer'
import {reducer as productReducer} from './allProduct/allProduct.reducer'

const rootReducer = combineReducers({navReducer, cartReducer, shipReducer, productReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

