/**
 * The main code that combines all other states together
 * All reducers will come into this reducer
 * Bring in all other reducer
 * @format
 */

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

/**
 * Pulling all reducers user the combineReducer() method which will return one giant root-reducer
 * which are properly bound with all the redux reducers we need.
 */
export default combineReducers({
	user: userReducer,
	cart: cartReducer,
});
