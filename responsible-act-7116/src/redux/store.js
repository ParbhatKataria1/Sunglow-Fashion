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
import {reducer as orderReducer} from './order/order.reducer'

const rootReducer = combineReducers({navReducer, cartReducer, shipReducer, productReducer, orderReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

